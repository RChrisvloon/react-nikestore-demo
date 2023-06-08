import React, { useState } from 'react';
import Header from './components/Header/Header';
import CartProvider from './store/CartProvider';
import Footer from './components/Footer/Footer';
import ResultsView from './components/Products/ProductView/ResultsView';
import ResultsHeader from './components/Products/ProductView/ResultsHeader';
import Cart from './components/Cart/Cart';

function App() {
  // IMPROVE -- ResultsHeader & ResultsView should be handled in it's own page-component.
  //         -- React Router and React Redux will fix this problem and slim down App.js
  // Also toggle state should be available from one central store, which could be done with context, but i have to add that later

  // Filter menu visibility state
	const [filterMenuisShown, setFilterMenuIsShown] = useState(true);

  // Toggle filter menu
	const toggleFilterMenu = () => {
		setFilterMenuIsShown((prevState) => !prevState);
	};

  // Cart visibility state
  const [cartIsShown, setCartIsShown] = useState(false);

  // Show cart handler
	const showCartHandler = () => {
		setCartIsShown(true);
	};

  // Hide cart handler
	const hideCartHandler = () => {
		setCartIsShown(false);
	};


	return (
		<CartProvider>
      {/* Render the cart component if cartIsShown is true */}
      {cartIsShown && <Cart hideCart={hideCartHandler}/>}
			<Header showCart={showCartHandler}/>
			<main>
				<ResultsHeader toggleFilterMenu={toggleFilterMenu} showFilterMenu={filterMenuisShown} />
				<ResultsView toggleFilterMenu={toggleFilterMenu} showFilterMenu={filterMenuisShown} />
			</main>
			<Footer />
		</CartProvider>
	);
}

export default App;
