import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
};

const dataSlice = createSlice({
	name: 'data',
	initialState: initialState,
	reducers: {
		storeProducts(state) {
			return 'STORE PRODUCTS';
		},
	},
});

export const dataSliceActions = dataSlice.actions;
export default dataSlice.reducer;
