// Asset imports
import classes from './FilterOption.module.css';

const FilterOption = (props) => {
	return (
		<div className={classes['filter-section_item']}>
			<input type={props.type} name={props.name} />
			<label>{props.name}</label>
		</div>
	);
};

export default FilterOption;
