// React (Redux) imports
import { Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiSliceActions } from '../store/slices/uiSlice';

// Component imports
import ResultsView from '../components/ProductsPage/ProductView/ResultsView';
import ResultsHeader from '../components/ProductsPage/ProductView/ResultsHeader';

const ProductsPage = () => {
  const dispatch = useDispatch();

	// Access data from store
	const filterMenuIsShown = useSelector((state) => state.ui.filterMenuIsShown);

  	// Toggle filter menu
	const toggleFilterMenu = () => {
		dispatch(uiSliceActions.toggleFilterMenu());
	};
	return (
		<Fragment>
			<main>
				<ResultsHeader toggleFilterMenu={toggleFilterMenu} showFilterMenu={filterMenuIsShown} />
				<ResultsView toggleFilterMenu={toggleFilterMenu} showFilterMenu={filterMenuIsShown} />
			</main>
		</Fragment>
	);
};

export default ProductsPage;
