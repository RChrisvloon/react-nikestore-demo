// React (Redux) imports
import { Link } from 'react-router-dom';

// Asset imports
import classes from './BackNavigation.module.css';
import arrowLeft from '../../../assets/left-arrow.svg';

/**
 * Represents a back-button navigation component with a link to a previous page.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.relativeToPath - Whether the link should return relative to the path or route.
 * @returns {React.JSX.Element} The rendered back navigation component.
 */
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
