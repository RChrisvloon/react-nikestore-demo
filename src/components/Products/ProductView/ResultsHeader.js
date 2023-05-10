import React from 'react';
import classes from './ResultsHeader.module.css';

// Import svg file(s)
import downArrow from '../../../assets/down-arrow.svg';
import settings from '../../../assets/settings.svg';

// Title and filters shown above the productgrid
const ResultsHeader = (props) => {
  // Toggle if filterMenu is shown
  const toggleFilterHandler = () => {
    props.toggleFilterMenu();
  }

	return (
		<div className={classes['results-header']}>
			<h1>Men's Shoes & Sneakers (785)</h1>
			<div className={classes["results-header-buttons"]}>
				<div onClick={toggleFilterHandler}>
					<p>{props.showFilterMenu ? 'Hide' : 'Show' } Filters</p>
					<img src={settings} alt="Settings icon"/>
				</div>
				<div>
					<p>Sort By</p>
					<img src={downArrow} alt="Down arrow" />
				</div>
			</div>
		</div>
	);
};

export default ResultsHeader;
