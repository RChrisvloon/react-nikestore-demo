import { uiActions } from '../uiSlice';
import { cartActions } from './cartSlice';

// Action creators
export const sendCartData = (cart) => {
	return async (dispatch) => {
		// Request -- PENDING
		dispatch(
			uiActions.showNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data!',
			})
		);

		// Wrap fetch-request in seperate function (Now we can wrap this function in a try-catch later on)
		const sendRequest = async () => {
			const response = await fetch(
				'https://react-http-b7d1c-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify({ items: cart.items, totalAmount: cart.totalAmount }),
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
				uiActions.showNotification({
					status: 'error',
					title: 'Error',
					message: 'Failed to send cart data!',
				})
			);
		}

		// Request -- SUCCESS
		dispatch(
			uiActions.showNotification({
				status: 'success',
				title: 'Success',
				message: 'Sent cart data successfully!',
			})
		);
	};
};

export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				'https://react-http-b7d1c-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
			);

			if (!response.ok) {
				throw new Error('Could not fetch cart data!');
			}

			const data = await response.json();

			return data;
		};

		try {
			const cartData = await fetchData();
			dispatch(cartActions.replaceCart(cartData));
		} catch (error) {
			// Request - FAILED
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error',
					message: 'Failed to fetch cart data!',
				})
			);
		}
	};
};
