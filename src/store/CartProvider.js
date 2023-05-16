import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [], // (id, newPrice, selectedSize, amount)
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
    // Update TotalAmount (TO-DO -- ADD OPTION TO ADD MULTIPLE AT ONCE 'action.item.newPrice * actio.item.amount')
    const updatedTotalAmount = state.totalAmount + action.item.newPrice;

    // Check if item with same id & size exists in the cart
    const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id && item.selectedSize === action.item.selectedSize);
    const existingItem = state.items[existingItemIndex];

    let updatedItems;

    // Item is already in the cart
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + 1 // TO-DO -- Could be '+ action.item.amount' if option for multiple-addition is added
      }
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
	}

	if (action.type === 'REMOVE') {
    // Find item in cart

    // Update totalamount by doing: totalamount - item.price (or similar)

    // create new let updatedItems

    // if amount of that item is 1, filter it out

    // else create const updatedItem and lower amount by 1
    

    // Check if item with same id & size exists in the cart
    const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id && item.selectedSize === action.item.selectedSize);
    const existingItem = state.items[existingItemIndex];

    // Update TotalAmount
    const updatedTotalAmount = state.totalAmount + existingItem.newPrice;

    let updatedItems;

    // Item is already in the cart
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + 1 // TO-DO -- Could be '+ action.item.amount' if option for multiple-addition is added
      }
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
	}
  
  if (action.type === 'CLEAR') {
    return defaultCartState;
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
