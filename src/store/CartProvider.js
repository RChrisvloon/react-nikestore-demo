import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [], // (id, price, newPrice, selectedSize, amount)
	totalAmount: 0,
};

// Reducer function to manage cart state
const cartReducer = (state, action) => {
	// ADD - Item to cart
	if (action.type === 'ADD') {
		let updatedTotalAmount;

		// Check for discounted price
		if (action.item.newPrice) {
			updatedTotalAmount = state.totalAmount + action.item.newPrice;
		} else {
			updatedTotalAmount = state.totalAmount + action.item.price;
		}

		// Check if item with same id & size exists in the cart
		const existingItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id && item.selectedSize === action.item.selectedSize
		);
		const existingItem = state.items[existingItemIndex];

		let updatedItems;

		if (existingItem) {
			// Item is already in the cart, update the amount
			const updatedItem = {
				...existingItem,
				amount: existingItem.amount + 1,
			};
			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			// Item is not in the cart, add it to the items array
			updatedItems = state.items.concat(action.item);
		}

    console.log(state.items);
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	// REMOVE - Item from cart
	if (action.type === 'REMOVE') {
		// Check if item with same id & size exists in the cart
		const existingItem = state.items.find(
			(item) => item.id === action.item.id && item.selectedSize === action.item.size
		);

		let updatedTotalAmount;

		// Check for discounted price
		if (existingItem.newPrice) {
			updatedTotalAmount = state.totalAmount - existingItem.newPrice * existingItem.amount;
		} else {
			updatedTotalAmount = state.totalAmount - existingItem.price * existingItem.amount;
		}

		let updatedItems;

		// Filter out item to be removed
		updatedItems = state.items.filter((item) => item !== existingItem);

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	// CHANGE - Amount of product in cart
	if (action.type === 'CHANGE_SIZE') {
		const productId = action.item.id;
		const amountOfOldShoe = action.item.amount;
		const oldSize = action.item.oldSize;
		const newSize = action.item.newSize;

		// 1. Find shoe with old/current size in cart
		const oldShoe = state.items.find(
			(item) => item.id === productId && item.selectedSize === oldSize
		);

		// 2. Create updatedItems variable for updated state
		let updatedItems;

		// 2.1 Filter out the old item
		updatedItems = state.items.filter((item) => item !== oldShoe);
    console.log(updatedItems);

		// 3. Find shoe newly selected size in cart
		const newShoeIndex = state.items.findIndex(
			(item) => item.id === productId && item.selectedSize === newSize
		);
		const newShoe = state.items[newShoeIndex];

		// 3.1 Item with new size already in cart
		if (newShoe) {
			// Update the amount + amount of the old shoe size
			const updatedItem = {
				...newShoe,
				amount: newShoe.amount + amountOfOldShoe,
			};
			updatedItems = [...state.items];
			updatedItems[newShoeIndex] = updatedItem;
		} else {
			// Item is not in the cart, add it to the items array
			updatedItems = state.items.concat({id: productId, price: oldShoe.price, newPrice: oldShoe.newPrice, selectedSize: newSize, amount: amountOfOldShoe});
		}

		return {
			items: updatedItems,
			totalAmount: state.totalAmount
		};
	}

	// CLEAR - Remove an item completely from the cart
	if (action.type === 'CLEAR') {
		// Clear the cart
		return defaultCartState;
	}

	// CHECKOUT - Empty cart and store order in database
	if (action.type === 'CHECKOUT') {
		console.log('ORDER PLACED!');
		return defaultCartState;
	}
};

// CartProvider component to manage cart state using context
const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: 'ADD', item: item });
	};

	const removeItemToCartHandler = (item) => {
		dispatchCartAction({ type: 'REMOVE', item: item });
	};

	const changeSizeHandler = (item) => {
		dispatchCartAction({ type: 'CHANGE_SIZE', item: item });
	};

	const clearCartHandler = () => {
		dispatchCartAction({ type: 'CLEAR' });
	};

	const checkoutCartHandler = () => {
		dispatchCartAction({ type: 'CHECKOUT' });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
		changeSize: changeSizeHandler,
		clearCart: clearCartHandler,
		checkoutCart: checkoutCartHandler,
	};

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
