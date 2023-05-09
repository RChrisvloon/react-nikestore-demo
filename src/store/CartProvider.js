import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
	}

	if (action.type === 'REMOVE') {
	}
  
  if (action.type === 'CLEAR') {

  }
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: 'ADD', item: item });
	};

	const removeItemToCartHandler = (id) => {
		dispatchCartAction({ type: 'REMOVE', id: id });
	};

  const clearCartHandler = () => {
    dispatchCartAction({type: 'CLEAR'});
  }

  // Fill in the cartContext with values from CartProvider.js
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler
  }

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider;
