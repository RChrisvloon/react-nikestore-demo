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
			// Update the totalAmount & check if newPrice exists, otherwise use the original price
			let updatedTotalAmount;
			updatedTotalAmount = state.totalAmount + (action.payload.newPrice || action.payload.price);

			// Check if item with same id & size exists in the cart
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
			);
			const existingItem = state.items[existingItemIndex];

			let updatedItems;

			if (existingItem) {
				// Item is already in the cart, update the amount
				if (existingItem.amount >= 10) {
					window.alert('Maximum amount(10) of this item has been reached! ');
					return;
				}
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
			console.log('add ', state.items);
		},
		remove(state, action) {
			// Check if item with same id & size exists in the cart
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id && item.selectedSize === action.payload.size
			);

			// Update totalAmount & check if newPrice exists, otherwise use the original price
			let updatedTotalAmount;
			updatedTotalAmount =
				state.totalAmount - (existingItem.newPrice || existingItem.price) * existingItem.amount;

			// Filter out item to be removed
			let updatedItems;
			updatedItems = state.items.filter((item) => item !== existingItem);

			state.items = updatedItems;
			state.totalAmount = updatedTotalAmount;
			console.log('remove ', state.items);
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

				// If max amount of this item will be reached
				if (updatedItem.amount > 10) {
					// Give user option to confirm this action
					if (
						window.confirm(
							'This action will exceed the maximum amount(10) of this item. The amount will be set to 10. Are you sure?'
						)
					) {
						updatedItem.amount = 10;
					} else {
						return;
					}
				}

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
			console.log('change size ', state.items);
		},
		changeAmount(state, action) {
			// Check if item exists in cart
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id && item.selectedSize === action.payload.shoeSize
			);
			const existingItem = state.items[existingItemIndex];

			// Subtract the cost of (amount of old shoes * price of shoe) from the totalprice
			const previousAmountMinusShoeCost =
				state.totalAmount - (action.payload.newPrice || existingItem.price) * existingItem.amount;

			// Update totalAmount by adding (new amount of shoe * price of shoe)
			let updatedTotalAmount;
			updatedTotalAmount =
				previousAmountMinusShoeCost +
				(action.payload.newPrice || existingItem.price) * action.payload.newAmount;

			// Create new temporary variable for updatedItems
			let updatedItems;

			const updatedItem = {
				...existingItem,
				amount: action.payload.newAmount,
			};

			if (updatedItem.amount < 1 || updatedItem.amount > 10) {
				window.alert('Selected amount(1-10) is invalid.');
				return;
			}

			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedItem;

			state.items = updatedItems;
			state.totalAmount = updatedTotalAmount;
			console.log('change amount ,', state.items);
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
