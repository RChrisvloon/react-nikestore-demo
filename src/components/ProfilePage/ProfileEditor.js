// React (Redux) imports
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSliceActions } from '../../store/slices/userSlice';

// Component imports
import Modal from '../common/Modal/Modal';
import ImageComponent from '../common/ImageComponent/ImageComponent';
import FormInput from '../common/FormInput/FormInput';
import ModalHeader from '../common/Modal/ModalHeader';

// Firebase
import { getAuth, updateProfile } from 'firebase/auth';

// Asset imports
import classes from './ProfileEditor.module.css';
import defaultAvatar from '../../assets/default_avatar.png';
import linkIcon from '../../assets/link.svg';
import userIcon from '../../assets/user.svg';
import mailIcon from '../../assets/mail.svg';
import eyeIcon from '../../assets/eye.svg';

const ProfileEditor = (props) => {
	const dispatch = useDispatch();
	const auth = getAuth();
	const user = useSelector((state) => state.user.user);
	const photoURLRef = useRef();

	const changeProfileHandler = () => {
		const newPhotoURL = photoURLRef.current.value;

		// Check if photoURL was changed
		if (user.photoURL === newPhotoURL) {
			console.log('PhotoURL has not been changed.');
			return;
		}

		// Get logged in user & update userprofile
		const currentUser = auth.currentUser;

		updateProfile(currentUser, { photoURL: newPhotoURL })
			.then(() => {
				// PhotoURL has been updated in firebase
				dispatch(userSliceActions.setPhotoURL(newPhotoURL));

				// TODO -- Show success message
			})
			.catch((error) => {
				// TODO -- Show error message
				console.log(error);
			});
	};

	return (
		<Modal onClose={props.onClose}>
			<ModalHeader text={'Account Settings'} onClick={props.onClose} />
			<div className={classes.profileSection}>
				<div className={classes.imageSection}>
					<div className={classes.imageWrapper}>
						<ImageComponent
							src={user.photoURL || defaultAvatar}
							className={'profileImg'}
							alt={'Placeholder profilepicture'}
						/>
					</div>
					<FormInput
						label="Link to image"
						type="text"
						id="imageLink"
						name="imageLink"
						defaultValue={user.photoURL}
						icon={linkIcon}
						ref={photoURLRef}
					/>
				</div>
				<div>
					<FormInput
						label="Full Name"
						type="text"
						id="fullName"
						name="fullName"
						defaultValue={user.displayName}
						icon={userIcon}
						disabled={true}
					/>
					<FormInput
						label="Email"
						type="text"
						id="email"
						name="email"
						defaultValue={user.email}
						icon={mailIcon}
						disabled={true}
					/>
					<FormInput
						label="Password"
						type="password"
						id="password"
						name="password"
						defaultValue={'placeholderpassword'}
						icon={eyeIcon}
						disabled={true}
					/>
				</div>
			</div>
			<button className="basic-button basic-button_wide" onClick={changeProfileHandler}>
				Save
			</button>
		</Modal>
	);
};

export default ProfileEditor;
