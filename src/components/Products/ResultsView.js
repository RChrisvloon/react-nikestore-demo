import React from 'react';
import ProductGrid from './ProductGrid';
import Scroller from './Scroller';
import classes from './ResultsView.module.css';

// Import svg file(s)

const ResultsView = (props) => {
	return (
		<div className={classes['results-container']}>
			{props.showScroller && <Scroller />}
			<ProductGrid />
		</div>
	);
};

export default ResultsView;
