// React (Redux) imports
import DUMMY_PRODUCTS from '../../../data/DummyProducts';

// Asset imports
import classes from './ResultsHeader.module.css';
import downArrow from '../../../assets/down-arrow.svg';
import settings from '../../../assets/settings.svg';

// Title and filters shown above the productgrid
const ResultsHeader = (props) => {
	// Toggle if filterMenu is shown
	const toggleFilterHandler = () => {
		props.toggleFilterMenu();
	};

	return (
		<div className={classes['results-header']}>
			<h1>Men's Shoes & Sneakers ({DUMMY_PRODUCTS.length})</h1>
			<div className={classes['results-header-buttons']}>
				<div onClick={toggleFilterHandler}>
					<p>{props.showFilterMenu ? 'Hide' : 'Show'} Filters</p>
					<img src={settings} alt="Copyright by https://tablericons.com/" />
				</div>
				<div id={classes['sort-button']}>
					<p>Sort By</p>
					<img src={downArrow} alt="Copyright by https://tablericons.com/" />
				</div>
			</div>
		</div>
	);
};

export default ResultsHeader;
