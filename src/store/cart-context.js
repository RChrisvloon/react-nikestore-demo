import React from 'react';

// Create a new Context, which we use in CartProvider.js
const cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
  changeSize: (item) => {},
  clearCart: () => {},
  checkoutCart: () => {}
})

export default cartContext;