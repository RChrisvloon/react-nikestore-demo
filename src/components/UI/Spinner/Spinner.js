import spinner from '../../../assets/loadingspinner.svg';
import classes from './Spinner.module.css';

const Spinner = () => {
	return (
		<div className={classes.spinner_wrapper}>
			<img className={classes.spinner} src={spinner} alt="Loading spinner.." />
		</div>
	);
};

export default Spinner;
