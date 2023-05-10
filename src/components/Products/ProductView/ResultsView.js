import ProductGrid from './ProductGrid';
import FilterMenu from '../ProductFilters/FilterMenu';
import classes from './ResultsView.module.css';

const ResultsView = (props) => {
	return (
		<div className={classes['results-container']}>
			{props.showFilterMenu && <FilterMenu />}
			<ProductGrid />
		</div>
	);
};

export default ResultsView;
