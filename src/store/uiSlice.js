import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: { cartIsVisible: false, productModalIsVisible: false },
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
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
