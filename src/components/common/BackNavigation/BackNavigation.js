// React (Redux) imports
import { Link } from 'react-router-dom';

// Asset imports
import classes from './BackNavigation.module.css';
import arrowLeft from '../../../assets/left-arrow.svg';

const BackNavigation = (props) => {
	return (
		/**
		 * Navigates back to a previous page.
		 *
		 * @returns {React.JSX.Element} The rendered back navigation link.
		 */
		<Link to={'..'} relative={props.relativeToPath ? 'path' : 'route'}>
			<div className={classes['navigation_wrapper']}>
				<img src={arrowLeft} alt={'back button'} />
				<p>Go back</p>
			</div>
		</Link>
	);
};

export default BackNavigation;
