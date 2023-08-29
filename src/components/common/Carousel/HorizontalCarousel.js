// React (Redux) imports
import { useState } from 'react';

// Component imports
import Product from '../../ProductsPage/ProductView/Product';

// Asset imports
import DUMMY_PRODUCTS from '../../../data/DummyProducts';
import classes from './HorizontalCarousel.module.css';
import arrowLeft from '../../../assets/left-arrow.svg';
import arrowRight from '../../../assets/right-arrow.svg';

const HorizontalCarousel = () => {
	const [currentProduct, setCurrentProduct] = useState(0);

	const nextHandler = () => {
		// Next arrow is clicked and last product is visible
		if (currentProduct === DUMMY_PRODUCTS.length - 3) {
			// Go to first product
			setCurrentProduct(0);
		} else {
			// Otherwise, go back to next product
			setCurrentProduct((prevState) => prevState + 1);
		}
	};

	const prevHandler = () => {
		// Previous arrow is clicked & first product is visible
		if (currentProduct === 0) {
			// Go to last product
			setCurrentProduct(DUMMY_PRODUCTS.length - 3);
		} else {
			// Otherwise, go to previous product
			setCurrentProduct((prevState) => prevState - 1);
		}
	};

	// Create a Product component for each dummy product
	// TODO -- Fetch favourites of each user from firebase
	const productsList = DUMMY_PRODUCTS.map((item) => {
		return (
			<Product
				key={item.id}
				id={item.id}
				title={item.title}
				description={item.description}
				price={item.price}
				discountedPrice={item.discountedPrice}
				discountPercentage={item.discountPercentage}
				image={item.img_url}
				sub_images={item.sub_images}
			/>
		);
	});

	return (
		<section className={classes.container}>
			<div className={classes.header}>
				<h2>Favourites</h2>
				<div className={classes.buttonSection}>
					<button onClick={prevHandler}>
						<img src={arrowLeft} alt="Left arrow button" />
					</button>
					<button onClick={nextHandler}>
						<img src={arrowRight} alt="Right arrow button" />
					</button>
				</div>
			</div>
			<div className={classes.carouselItems_wrapper}>
				<div
					className={classes.carouselItems}
					style={{ transform: `translateX(${-33.33333 * currentProduct}%)` }}
				>
					{productsList}
				</div>
			</div>
		</section>
	);
};

export default HorizontalCarousel;
