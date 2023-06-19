import { uiSliceActions } from '../slices/uiSlice';
import { cartSliceActions } from '../slices/cartSlice';

// Action creator for sending cart data to firebase
export const sendCartData = (cart) => {
	return async (dispatch) => {
		// Request -- PENDING
		dispatch(
			uiSliceActions.showNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data!',
			})
		);

		// Wrap fetch-request in seperate function (Now we can wrap this function in a try-catch later on)
		const sendRequest = async () => {
			// Send cart data to firebase
			const response = await fetch(
				'https://react-http-b7d1c-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify({ items: cart.items }),
				}
			);

			if (!response.ok) {
				throw new Error('Sending cart data failed.');
			}
		};

		try {
			await sendRequest();
		} catch (error) {
			// Request - FAILED
			dispatch(
				uiSliceActions.showNotification({
					status: 'error',
					title: 'Error',
					message: 'Failed to send cart data!',
				})
			);
		}

		// Request -- SUCCESS
		dispatch(
			uiSliceActions.showNotification({
				status: 'success',
				title: 'Success',
				message: 'Sent cart data successfully!',
			})
		);
	};
};

// Action creator for fetching cart data from firebase
export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			// Fetch data from firebase
			const response = await fetch(
				'https://react-http-b7d1c-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
			);

			if (!response.ok) {
				throw new Error('Could not fetch cart data!');
			}

			const data = await response.json();

			// TODO: -- SANITIZE DATA TO CHECK IF EVERYTHING IS CORRECT AND AVAILABLE

			return data;
		};

		try {
			const cartData = await fetchData();

			if (!cartData) {
				return;
			}

      // Replace the current cart with the fetched items
			dispatch(cartSliceActions.replaceCart(cartData));
		} catch (error) {
			// Request - FAILED
			dispatch(
				uiSliceActions.showNotification({
					status: 'error',
					title: 'Error',
					message: 'Failed to fetch cart data!',
				})
			);
		}
	};
};
