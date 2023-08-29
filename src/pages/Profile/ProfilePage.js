// React (Redux) imports
import { useSelector } from 'react-redux';
import ProfileHeader from '../../components/ProfilePage/ProfileHeader';
import ProfileFavourites from '../../components/ProfilePage/ProfileFavourites';

const ProfilePage = () => {
	const user = useSelector((state) => state.user.user);

	if (!user) {
		return (
			<div className="errorContent">
				<h1>Please log in to view your profile!</h1>
				<p>Go to log in page.</p>
			</div>
		);
	}

	return (
		<div className="content-inner">
			{/* <p>{JSON.stringify(user)}</p> */}
			<ProfileHeader />
			<ProfileFavourites />
		</div>
	);
};

export default ProfilePage;
