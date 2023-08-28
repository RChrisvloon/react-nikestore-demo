// React (Redux) imports
import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
		<Fragment>
			<div className="content-inner">
				<h1>Profile page</h1>
				<p>{JSON.stringify(user)}</p>
			</div>
		</Fragment>
	);
};

export default ProfilePage;
