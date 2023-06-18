// React (Redux) imports
import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartData, sendCartData } from './store/actions/cartActions';
import { uiSliceActions } from './store/slices/uiSlice';

// Component imports
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import ResultsView from './components/Products/ProductView/ResultsView';
import ResultsHeader from './components/Products/ProductView/ResultsHeader';
import Cart from './components/Cart/Cart';
import Notification from './components/common/Notification/Notification';

// Other imports
import { createBrowserRouter } from 'react-router-dom';

// const routeDefinitions = createBrowserRouter([{ path: '/', element: <h1>hello</h1> }, { path: '' }]);

// Variable used for checking if cartData should be submitted to firebase upon reload.
let isInitial = true;

function App() {
	const dispatch = useDispatch();

	// Access data from store
	const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.notification);
	const filterMenuIsShown = useSelector((state) => state.ui.filterMenuIsShown);

	// Toggle filter menu
	const toggleFilterMenu = () => {
		dispatch(uiSliceActions.toggleFilterMenu());
	};

	// Fetch cartdata from firebase
	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	// Upload cartdata to firebase
	useEffect(() => {
		// Add check so react doesn't upload the empty cart on page-reload to firebase
		if (isInitial) {
			isInitial = false;
			return;
		}

		// Cart data is only send to firebase when something is added/removed
		if (cart.changed) {
			dispatch(sendCartData(cart));
		}
	}, [cart, dispatch]);

	return (
		<Fragment>
			{cartIsVisible && <Cart />}
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Header />
			<main>
				<ResultsHeader toggleFilterMenu={toggleFilterMenu} showFilterMenu={filterMenuIsShown} />
				<ResultsView toggleFilterMenu={toggleFilterMenu} showFilterMenu={filterMenuIsShown} />
			</main>
			<Footer />
		</Fragment>
	);
}

export default App;
