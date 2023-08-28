// React (Redux) imports
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSliceActions } from '../../store/slices/userSlice';

// Firebase
import { auth } from '../../firebase';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';

// Component imports
import ImageComponent from '../../components/common/ImageComponent/ImageComponent';

// Asset imports
import classes from './AuthLayout.module.css';
import nikeLogo from '../../assets/nike.svg';
import userIcon from '../../assets/user.svg';
import mailIcon from '../../assets/mail.svg';
import eyeIcon from '../../assets/eye.svg';
import Message from '../../components/common/Feedback/Message';
import FormInput from '../../components/common/FormInput/FormInput';

// TODO -- Create reuseable inputfield-component & seperate login and signup-content
// TODO -- Move sign up/in-functionality to other services folder.
const AuthLayout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// Animation variables
	const [isSigningUp, setisSigningUp] = useState(true);
	const [isAnimationOver, setIsAnimationOver] = useState(false);

	// User input variables from Redux state
	const { email, fullName, password } = useSelector((state) => state.user);

	// State for displaying messages
	const [messageStatus, setMessageStatus] = useState(null);
	const [messageText, setMessageText] = useState(null);

	// Handler for toggling between login and signup
	const toggleLoginScreen = () => {
		setIsAnimationOver(false);
		setisSigningUp((prevState) => !prevState);

		setTimeout(() => {
			setIsAnimationOver(true);
		}, 300);
	};

	// Clear animation class after initial load
	useEffect(() => {
		setTimeout(() => {
			setIsAnimationOver(true);
		}, 300);
	}, []);

	// Function for managing messages
	const messageHandler = (status, text) => {
		setMessageStatus(status);
		setMessageText(text);

		// Clear message after a set time
		setTimeout(() => {
			setMessageStatus('');
			setMessageText('');
		}, 3500);
	};

	// Handle sign in of existing user
	const signInHandler = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				// Display success message & redirect to home page
				messageHandler('success', 'Logged in successfully! You will be redirected soon.');

				setTimeout(() => {
					navigate('/');
				}, 2500);
			})
			.catch(() => {
				messageHandler('error', 'Could not log in!');
			});
	};

	// Handle sign up of new users
	const signUpHandler = (e) => {
		e.preventDefault();

		// Check if full name is provided
		if (fullName === null || fullName === '') {
			messageHandler('error', 'Please enter a valid full name.');
			return;
		}

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;

				// Update display name with entered full name
				updateProfile(user, { displayName: fullName })
					.then(() => {
						// Display success message & redirect to profile page
						messageHandler('success', 'Signed up successfully! You will be redirected soon.');

						setTimeout(() => {
							navigate('/profile');
						}, 2500);
					})
					.catch(() => {
						messageHandler('warning', 'Full name could not be updated, but you will be logged in.');
					});
			})
			.catch(() => {
				messageHandler('error', 'Could not sign up! Please try again.');
			});
	};

	return (
		<main className={classes.content}>
			<div className={classes.container}>
				<div className={classes['section-left']}>
					<div className={classes['section_header']}>
						<Link to={'/'} className={'app-logo_wrapper'}>
							<ImageComponent src={nikeLogo} className={'app-logo'} alt={'Logo - Copyright by nike.com'} />
						</Link>
					</div>
					<div
						className={[
							classes['section-left_content'],
							!isAnimationOver ? classes['animated-down'] : '',
						].join(' ')}
					>
						<form onSubmit={isSigningUp ? signUpHandler : signInHandler}>
							<h1 className={classes['section_title']}>{isSigningUp ? 'Create Account' : 'Log In'}</h1>
							{isSigningUp && (
								<FormInput
									label="Full Name"
									type="text"
									id="fullName"
									name="fullName"
									value={fullName}
									onChange={(e) => dispatch(userSliceActions.setFullName(e.target.value))}
									icon={userIcon}
								/>
							)}
							<FormInput
								label="Email"
								type="email"
								id="email"
								name="email"
								value={email}
								onChange={(e) => dispatch(userSliceActions.setEmail(e.target.value))}
								icon={mailIcon}
							/>
							<FormInput
								label="Password"
								type="password"
								id="password"
								name="password"
								value={password}
								onChange={(e) => dispatch(userSliceActions.setPassword(e.target.value))}
								icon={eyeIcon}
							/>
							{messageText && <Message message={messageText} status={messageStatus} />}
							<div className={classes['section-left-bottom_wrapper']}>
								<button className={['basic-button', classes['button_bigger']].join(' ')} type="submit">
									{isSigningUp ? 'Sign Up' : 'Log In'}
								</button>
								<div className={classes['joinWith_section']}>
									<p>or join with</p>
									<a href="/">Facebook</a>
									<a href="/">Google</a>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className={classes['section-right']}>
					<div
						className={[
							classes['section-right_centered'],
							!isAnimationOver ? classes['animated-up'] : '',
						].join(' ')}
					>
						<h2 className={[classes['section_title'], classes['section_title-white']].join(' ')}>
							{isSigningUp ? 'Welcome back!' : 'Create an account!'}
						</h2>
						<p>
							{isSigningUp
								? 'Log in to view your purchase history or place an order for those shoes you really want!'
								: 'Create an account to keep track of all of your favourite items and more.'}
						</p>
						<button
							className={['basic-button', classes['button_bigger'], classes['button_bigger-right']].join(
								' '
							)}
							onClick={toggleLoginScreen}
						>
							{isSigningUp ? 'Log in' : 'Sign up'}
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AuthLayout;
