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
	const [filterMenuisShown, setFilterMenuIsShown] = useState(true);

	const toggleFilterMenu = () => {
		setFilterMenuIsShown((prevState) => !prevState);
	};

  // Cart visibility state
  const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};


	return (
		<CartProvider>
      {cartIsShown && <Cart hideCart={hideCartHandler}/>}
			<Header showCart={showCartHandler}/>
			<main>
				<ResultsHeader toggleFilterMenu={toggleFilterMenu} showFilterMenu={filterMenuisShown} />
				<ResultsView showFilterMenu={filterMenuisShown} />
			</main>
			<Footer />
		</CartProvider>
	);
}

export default App;
