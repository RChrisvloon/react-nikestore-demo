// React (Redux) imports
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userSliceActions } from '../store/slices/userSlice';

// Firebase imports
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthDetails = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// Observe the user's login state
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(userSliceActions.setLoggedIn());
			} else {
				dispatch(userSliceActions.setLoggedOut());
			}

			return () => {
				listen();
			};
		});
	}, [dispatch]);
};

export default AuthDetails;
