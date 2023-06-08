import ProductGrid from './ProductGrid';
import FilterMenu from '../ProductFilters/FilterMenu';
import classes from './ResultsView.module.css';

const ResultsView = (props) => {
	return (
		<div id={classes['resultsView-container']}>
			<FilterMenu toggleFilterMenu={props.toggleFilterMenu} showFilterMenu={props.showFilterMenu}/>
			<ProductGrid showFilterMenu={props.showFilterMenu}/>
		</div>
	);
};

export default ResultsView;
