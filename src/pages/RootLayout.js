// React (Redux) imports
import { Fragment, useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartData, sendCartData } from '../store/actions/cartActions';

// Component imports
import Header from '../components/layout/Header/Header';
import Cart from '../components/Cart/Cart';
import Notification from '../components/common/Notification/Notification';
import Footer from '../components/layout/Footer/Footer';

// Variable used for checking if cartData should be submitted to firebase upon reload.
let isInitial = true;

const RootLayout = () => {
	const dispatch = useDispatch();
	const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.notification);

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
			<ScrollRestoration />
			{cartIsVisible && <Cart />}
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Header />
			<div className="content">
				<Outlet />
			</div>
			<Footer />
		</Fragment>
	);
};

export default RootLayout;
