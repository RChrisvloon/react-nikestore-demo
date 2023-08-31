// React (Redux) imports
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Firbase imports
import { auth } from '../../../../firebase';
import { signOut } from 'firebase/auth';

// Asset Imports
import classes from './TopBar.module.css';
import jordan from '../../../../assets/jordan.svg';
import converse from '../../../../assets/converse.svg';
import { userSliceActions } from '../../../../store/slices/userSlice';

const TopBar = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);

	const signOutHandler = (e) => {
		e.preventDefault();

		signOut(auth)
			.then(() => {
				// Successfully logged out
				dispatch(userSliceActions.setLoggedOut());
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className={classes.topBar}>
			<div className={classes.topBar_wrapper}>
				<ul className={classes.brandMenu}>
					<li className={classes.brandMenu_item}>
						<a href={'https://www.nike.com/jordan'}>
							<img src={jordan} alt="Copyright by https://www.nike.com/" />
						</a>
					</li>
					<li className={classes.brandMenu_item}>
						<a href={'https://www.converse.com/'}>
							<img src={converse} alt="Copyright by https://www.converse.com/" />
						</a>
					</li>
				</ul>
				<div className={classes.userMenu}>
					<div className={classes.userMenu_item}>
						<a href={'/'}>Find a store</a>
						<span>|</span>
					</div>
					<div className={classes.userMenu_item}>
						<a href={'/'}>Help</a>
						<span>|</span>
					</div>
					<div className={classes.userMenu_item}>
						<a href={'/'}>Join us</a>
						<span>|</span>
					</div>
					<div className={classes.userMenu_item}>
						{!user && <Link to={'/auth'}>{'Sign in'}</Link>}
						{user && <Link to={'/profile'}>{`Hello ${user.displayName ? user.displayName.split(" ")[0] : 'UNDEFINED'}`}</Link>}
            <span>|</span>
					</div>
					{user && (
						<div className={classes.userMenu_item}>
							<a href="/#" onClick={signOutHandler}>
								Sign out
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default TopBar;
