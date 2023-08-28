// Component imports
import ImageComponent from '../ImageComponent/ImageComponent';

// Asset imports
import classes from './Notification.module.css';
import crossWhite from '../../../assets/cross-white.svg';
import { useDispatch } from 'react-redux';
import { uiSliceActions } from '../../../store/slices/uiSlice';
import { useEffect } from 'react';

// Global component for displaying status-messages
const Notification = (props) => {
	const dispatch = useDispatch();

	// Create variable to store classNames in
	let notificationClasses = '';

	// Add class based on notification status
	switch (props.status) {
		case 'error':
			notificationClasses = classes.error;
			break;
		case 'success':
			notificationClasses = classes.success;
			break;

		case 'warning':
			notificationClasses = classes.warning;
			break;

		default:
			break;
	}

	const closeHandler = () => {
		dispatch(uiSliceActions.clearNotification());
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(uiSliceActions.clearNotification());
		}, 3000);

		// Cleanup function
		return () => {
			clearTimeout(timer);
		};
	}, [dispatch]);

	return (
		<section className={[classes.notification, notificationClasses].join(' ')}>
			<h2>{props.title}</h2>
			<div className={classes.rightSection}>
				<p>{props.message}</p>
				<ImageComponent
					className={'whiteCloseBtn'}
					src={crossWhite}
					alt={'Closing icon.'}
					onClick={closeHandler}
				/>
			</div>
		</section>
	);
};

export default Notification;
