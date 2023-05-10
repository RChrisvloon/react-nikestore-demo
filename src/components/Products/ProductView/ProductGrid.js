import React, { useState, Fragment } from 'react';
import classes from './ProductGrid.module.css';
import Product from './Product';
import ProductModal from '../ProductModal/ProductModal';
import DUMMY_PRODUCTS from '../../../store/DummyProducts';

// DEFAULT STATE FOR currentProduct-useState
const EMPTY_PRODUCTSTATE = {
	key: null,
	title: null,
	description: null,
	price: null,
	image: null,
	discount: null,
};

// View that shoes all products
const ProductGrid = (props) => {
	const [productModalIsShown, setProductModalIsShown] = useState(false);
	const [currentProduct, setCurrentProduct] = useState(0);

	// Open Modal-window & Pass clicked product to ProductModal
	const openModal = (id) => {
		setCurrentProduct(id);
		setProductModalIsShown(true);
	};

	const closeModal = () => {
		setProductModalIsShown(false);
	};

	// Return Product-component for each dummy product
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
		<Fragment>
			{productModalIsShown && <ProductModal productId={currentProduct} onClose={closeModal} />}
			<div className={classes['product-grid']}>{productsList}</div>
		</Fragment>
	);
};

export default ProductGrid;
