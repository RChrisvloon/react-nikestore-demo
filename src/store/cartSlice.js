import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
	items: [],
	totalAmount: 0,
	showCart: false,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		add(state, action) {
			let updatedTotalAmount;

			// Check for discounted price
			if (action.payload.newPrice) {
				updatedTotalAmount = state.totalAmount + action.payload.newPrice;
			} else {
				updatedTotalAmount = state.totalAmount + action.payload.price;
			}

			// Check if item with same id & size exists in the cart
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
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
				updatedItems = state.items.concat(action.payload);
			}

			state.items = updatedItems;
			state.totalAmount = updatedTotalAmount;
		},
		remove(state, action) {
			// Check if item with same id & size exists in the cart
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id && item.selectedSize === action.payload.size
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

			state.items = updatedItems;
			state.totalAmount = updatedTotalAmount;
		},
		changeSize(state, action) {
			const productId = action.payload.id;
			const amountOfOldShoe = action.payload.amount;
			const oldSize = action.payload.oldSize;
			const newSize = action.payload.newSize;

			// Create updatedItems variable for updated state
			let updatedItems;

			// Find shoe with old/current size in cart and filter out
			const oldShoe = state.items.find(
				(item) => item.id === productId && item.selectedSize === oldSize
			);

			// Filter out the old item
			updatedItems = state.items.filter(
				(item) => !(item.id === oldShoe.id && item.selectedSize === oldShoe.selectedSize)
			);

			// Find shoe newly selected size in cart
			const newShoeIndex = updatedItems.findIndex(
				(item) => item.id === productId && item.selectedSize === newSize
			);
			const newShoe = updatedItems[newShoeIndex];

			// Item with new size already in cart
			if (newShoe) {
				// Update the amount + amount of the old shoe size
				const updatedItem = {
					...newShoe,
					amount: newShoe.amount + amountOfOldShoe,
				};
				updatedItems[newShoeIndex] = updatedItem;
			} else {
				// Item is not in the cart, add it to the items array
				updatedItems = updatedItems.concat({
					id: productId,
					price: oldShoe.price,
					newPrice: oldShoe.newPrice,
					selectedSize: newSize,
					amount: amountOfOldShoe,
				});
			}

			state.items = updatedItems;
		},
		clear(state, action) {
			state.items = [];
			state.totalAmount = 0;
		},
		checkout(state, action) {
			// IMPROVE -- Will add API call for fake checkout later
			state.items = [];
			state.totalAmount = 0;
		},
		toggleCart(state) {
			// Invert the showCart-value to toggle cartvisibility
			state.showCart = !state.showCart;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
