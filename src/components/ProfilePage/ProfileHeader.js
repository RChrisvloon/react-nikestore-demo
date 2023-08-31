// React (Redux) imports
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from '../../store/slices/uiSlice';

// Component imports
import ImageComponent from '../common/ImageComponent/ImageComponent';

// Asset imports
import classes from './ProfileHeader.module.css';
import defaultAvatar from '../../assets/default_avatar.png';
import editIcon from '../../assets/editPencil.svg';
import ProfileEditor from './ProfileEditor';

const ProfileHeader = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);
	const showProfileEditor = useSelector((state) => state.ui.profileEditorisIsShown);

	const toggleProfileEditorHandler = () => {
		dispatch(uiSliceActions.toggleProfileEditor());
	};

	return (
		<section className={classes.wrapper}>
			<div className={classes.imageWrapper}>
				<ImageComponent
					src={user.photoURL ? user.photoURL : defaultAvatar}
					className={'profileImg'}
					alt={'Profile Picture'}
					onClick={toggleProfileEditorHandler}
				/>
			</div>
			<div className={classes.subHeader}>
				<div className={classes.nameContainer}>
					<h2>{user.displayName || 'Full Name not found'}</h2>
					<img src={editIcon} alt={'Edit profile.'} onClick={toggleProfileEditorHandler} />
				</div>
				<p>Nike member since {user.createdAt}</p>
			</div>

			{showProfileEditor && <ProfileEditor onClose={toggleProfileEditorHandler} />}
		</section>
	);
};

export default ProfileHeader;
