import { configureStore } from '@reduxjs/toolkit';

// Importing reducers
import cartReducer from './slices/cartSlice';
import uiReducer from './slices/uiSlice';
import userReducer from './slices/userSlice';

// Configuring the Redux store
const store = configureStore({
	reducer: { cart: cartReducer, ui: uiReducer, user: userReducer },
});

export default store;
