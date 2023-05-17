import React, { useState } from 'react';
import classes from './ProductGrid.module.css';
import Product from './Product';
import ProductModal from '../ProductModal/ProductModal';
import DUMMY_PRODUCTS from '../../../store/DummyProducts';

// View that shoes all products
const ProductGrid = (props) => {
	// State to control the visibility of the product modal
	const [productModalIsShown, setProductModalIsShown] = useState(false);

	// State to keep track of the currently selected product for the modal
	const [currentProduct, setCurrentProduct] = useState(false);

	// Function to open the product modal and set the current product
	const openModal = (id) => {
		setCurrentProduct(id);
		setProductModalIsShown(true);
	};

	// Function to close the product modal
	const closeModal = () => {
		setProductModalIsShown(false);
	};

	// Create a Product component for each dummy product
	const productsList = DUMMY_PRODUCTS.map((item) => {
		return (
			<Product
				key={item.id}
				id={item.id}
				title={item.title}
				description={item.description}
				price={item.price}
				image={item.img_url}
				sub_images={item.sub_images}
				discount={item.discount}
				openModal={openModal}
			/>
		);
	});

	return (
		<div
			className={[
				classes['productgrid-container'],
				props.showFilterMenu ? '' : classes['full-width'],
			].join(' ')}
		>
			{/* Render the product modal above productgrid*/}
			{productModalIsShown && <ProductModal productId={currentProduct} onClose={closeModal} />}

			<div className={classes['product-grid']}>{productsList}</div>
		</div>
	);
};

export default ProductGrid;
