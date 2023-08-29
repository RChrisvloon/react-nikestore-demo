// React (Redux) imports
import { useSelector } from 'react-redux';

// Asset imports
import classes from './ProfileHeader.module.css';
import defaultAvatar from '../../assets/default_avatar.png';

const ProfileHeader = () => {
	const user = useSelector((state) => state.user.user);

	return (
		<section className={classes.wrapper}>
			<a className={classes.imageWrapper} href={'/#'}>
				<img
					className={classes.profileImg}
					src={user.photoURL ? user.photoURL : defaultAvatar}
					alt={'Placeholder profilepicture'}
				/>
			</a>
			<div className={classes.subHeader}>
				<h2>{user.displayName || 'Your full name has not been set.'}</h2>
				<p>Nike member since {user.createdAt}</p>
			</div>
		</section>
	);
};

export default ProfileHeader;
