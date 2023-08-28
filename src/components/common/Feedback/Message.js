// Asset Imports
import classes from './Message.module.css';

const Message = (props) => {
	// Create variable to store classNames in
	let messageClasses = '';

	// Add class based on notification status
	switch (props.status) {
		case 'error':
			messageClasses = classes.error;
			break;
		case 'success':
			messageClasses = classes.success;
			break;

		case 'warning':
			messageClasses = classes.warning;
			break;

		default:
			break;
	}

	return (
		<div className={[classes.message, messageClasses].join(' ')}>
			<p>{props.message}</p>
		</div>
	);
};

export default Message;
