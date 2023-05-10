import React from 'react';
import classes from './FilterOption.module.css';

// Child-elements of FilterOptionSection
const FilterOption = (props) => {
	return (
		<div className={classes['filter-section_item']}>
			<input type={props.type} name={props.name} />
			<label>{props.name}</label>
		</div>
	);
};

export default FilterOption;
