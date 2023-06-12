import React, { useState } from 'react';
import { uiActions } from '../../../store/uiSlice';
import classes from './ProductGrid.module.css';
import Product from './Product';
import ProductModal from '../ProductModal/ProductModal';
import DUMMY_PRODUCTS from '../../../store/DummyProducts';
import { useDispatch, useSelector } from 'react-redux';

// View that shoes all products
const ProductGrid = (props) => {
	const dispatch = useDispatch();

	// State to control the visibility of the product modal
	const productModalIsVisible = useSelector((state) => state.ui.productModalIsVisible);

	// State to keep track of the currently selected product for the modal
	const [currentProduct, setCurrentProduct] = useState(false);

	// Function to open the product modal and set the current product
	const openModal = (id) => {
		setCurrentProduct(id);
		dispatch(uiActions.openProductModal());
	};

	// Function to close the product modal
	const closeModal = () => {
		dispatch(uiActions.closeProductModal());
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
			{productModalIsVisible && <ProductModal productId={currentProduct} onClose={closeModal} />}

			<div className={classes['product-grid']}>{productsList}</div>
		</div>
	);
};

export default ProductGrid;
