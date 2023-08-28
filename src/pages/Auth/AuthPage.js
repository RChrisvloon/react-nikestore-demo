// React (Redux) imports
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiSliceActions } from '../../store/slices/uiSlice';

// Asset imports

const AuthPage = () => {
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(uiSliceActions.setLoggedIn());
	// }, [dispatch]);

	return (
		<div className="content-inner">
			<h1>Auth page</h1>
		</div>
	);
};

export default AuthPage;
