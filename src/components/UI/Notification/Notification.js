import classes from './Notification.module.css';

const Notification = (props) => {
  let notificationClasses = '';

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

  return (
    <section className={[classes.notification, notificationClasses].join(' ')}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
}

export default Notification;