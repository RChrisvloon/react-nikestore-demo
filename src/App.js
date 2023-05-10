import React, { useState } from 'react';
import Header from './components/Header/Header';
import CartProvider from './store/CartProvider';
import Footer from './components/Footer/Footer';
import ResultsView from './components/Products/ProductView/ResultsView';
import ResultsHeader from './components/UI/ResultsHeader';

function App() {
	const [scrollerIsShown, setScrollerIsShown] = useState(true);

	const toggleScroller = () => {
		setScrollerIsShown((prevState) => !prevState);
	};

	return (
		<CartProvider>
			<Header />
			<main>
				<ResultsHeader toggleScroller={toggleScroller} showScroller={scrollerIsShown} />
				<ResultsView showScroller={scrollerIsShown} />
			</main>
			<Footer />
		</CartProvider>
	);
}

export default App;
