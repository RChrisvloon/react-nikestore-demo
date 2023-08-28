import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartIsVisible: false,
	productModalIsVisible: false,
	filterMenuIsShown: false,
	notification: null,
	loggedIn: false,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState: initialState,
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
		clearNotification(state) {
			state.notification = null;
		},
		setLoggedIn(state) {
			state.loggedIn = true;
		},
	},
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;
