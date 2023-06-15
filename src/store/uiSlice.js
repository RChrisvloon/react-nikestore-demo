import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		cartIsVisible: false,
		productModalIsVisible: false,
		filterMenuIsShown: false,
		notification: null,
	},
	reducers: {
		toggleCart(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
		openProductModal(state) {
			state.productModalIsVisible = true;
		},
		closeProductModal(state) {
			state.productModalIsVisible = false;
		},
		toggleFilterMenu(state) {
			state.filterMenuIsShown = !state.filterMenuIsShown;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
