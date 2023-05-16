import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
    console.log('id: ', action.id, 'size: ', action.size);
    // Update TotalAmount

    // Find item in cart

    // If item exists in cart, update amount for that item

    // Else concat product onto the state.items

    ///// Return object with items and totalAmount

    return null;
	}

	if (action.type === 'REMOVE') {
    // Find item in cart

    // Update totalamount by doing: totalamount - item.price (or similar)

    // create new let updatedItems

    // if amount of that item is 1, filter it out

    // else create const updatedItem and lower amount by 1

    ///// RETURN items and totalamount
	}
  
  if (action.type === 'CLEAR') {
    return defaultCartState;
  }
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item, size) => {
		dispatchCartAction({ type: 'ADD', item: item, size: size });
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
