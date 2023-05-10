import React, { useState } from 'react';
import Header from './components/Header/Header';
import CartProvider from './store/CartProvider';
import Footer from './components/Footer/Footer';
import ResultsView from './components/Products/ProductView/ResultsView';
import ResultsHeader from './components/Products/ProductView/ResultsHeader';

function App() {
  // State for showing/hiding filtermenu on left-side
	const [filterMenuisShown, setFilterMenuIsShown] = useState(true);

	const toggleFilterMenu = () => {
		setFilterMenuIsShown((prevState) => !prevState);
	};

	return (
		<CartProvider>
			<Header />
			<main>
				<ResultsHeader toggleFilterMenu={toggleFilterMenu} showFilterMenu={filterMenuisShown} />
				<ResultsView showFilterMenu={filterMenuisShown} />
			</main>
			<Footer />
		</CartProvider>
	);
}

export default App;
