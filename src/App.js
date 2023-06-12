import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ResultsView from './components/Products/ProductView/ResultsView';
import ResultsHeader from './components/Products/ProductView/ResultsHeader';
import Cart from './components/Cart/Cart';

function App() {
	// Access cartdata from store
	const showCart = useSelector((state) => state.ui.cartIsVisible);

	// Filter menu visibility state
	const [filterMenuisShown, setFilterMenuIsShown] = useState(true);

	// Toggle filter menu
	const toggleFilterMenu = () => {
		setFilterMenuIsShown((prevState) => !prevState);
	};

	return (
		<Fragment>
			{showCart && <Cart />}
			<Header />
			<main>
				<ResultsHeader toggleFilterMenu={toggleFilterMenu} showFilterMenu={filterMenuisShown} />
				<ResultsView toggleFilterMenu={toggleFilterMenu} showFilterMenu={filterMenuisShown} />
			</main>
			<Footer />
		</Fragment>
	);
}

export default App;
