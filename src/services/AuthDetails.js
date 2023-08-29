// React (Redux) imports
import { useEffect } from 'react';

// Firebase imports
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userSliceActions } from '../store/slices/userSlice';

const AuthDetails = () => {
	const dispatch = useDispatch();

  // TODO - Add (loading) spinner before logged in state is shown to user

	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(userSliceActions.setLoggedIn());
			}

			return () => {
				listen();
			};
		});
	}, [dispatch]);
};

export default AuthDetails;
