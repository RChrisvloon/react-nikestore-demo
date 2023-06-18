import { configureStore } from '@reduxjs/toolkit';

// Importing reducers
import cartReducer from './slices/cartSlice';
import uiReducer from './slices/uiSlice';

// Configuring the Redux store
const store = configureStore({
	reducer: { cart: cartReducer, ui: uiReducer },
});

export default store;
