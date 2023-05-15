import React, { Fragment } from 'react';
import classes from './FilterMenu.module.css';
import Switch from '../../UI/Switch';
import FilterOptionSection from './FilterOptionSection';
import FilterOption from './FilterOption';

// FilterMenu shown on left-side of ProductGrid
const FilterMenu = (props) => {
	return (
		<Fragment>
			<div className={[classes.filterMenu, props.showFilterMenu ? '' : classes['filterMenu_invisible']].join(' ')}>
				<div className={classes.filterMenu_pickup}>
					<p>Pick Up Today</p>
					<Switch />
				</div>
        {/* IMPROVE // Categories & Filteroptions could be loaded from external file or API*/}
				<div className={classes.filters}>
					<div className={classes['category-filters']}>
						<a href="/#">Lifestyle</a>
						<a href="/#">Jordan</a>
						<a href="/#">Running</a>
						<a href="/#">Basketball</a>
						<a href="/#">Training & Gym</a>
						<a href="/#">Walking</a>
					</div>
					<FilterOptionSection title="Gender">
						<FilterOption name="Men" type="checkbox" />
						<FilterOption name="Women" type="checkbox" />
						<FilterOption name="Unisex" type="checkbox" />
					</FilterOptionSection>
					<FilterOptionSection title="Shop by Price">
						<FilterOption name="$0 - $25" type="checkbox" />
						<FilterOption name="$25 - $50" type="checkbox" />
						<FilterOption name="$50 - $100" type="checkbox" />
						<FilterOption name="$100 - $150" type="checkbox" />
					</FilterOptionSection>
				</div>
			</div>
		</Fragment>
	);
};

export default FilterMenu;
