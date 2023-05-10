import React, { useState, Fragment } from 'react';
import classes from './ProductGrid.module.css';
import Product from './Product';
import ProductModal from '../ProductModal/ProductModal';

// Default Products - WILL BE API BASED LATER PROBABLY
const DUMMY_PRODUCTS = [
	{
		title: 'Nike Pegasus 40',
		description: "Men's Road Running Shoes",
		price: 130,
		img_url:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1c887b49-b5fe-4c6a-97b1-9a30f7cd8e29/pegasus-40-mens-road-running-shoes-h3bxQl.png',
		discount: 25,
	},
	{
		title: 'Nike Invincible 3',
		description: "Men's Road Running Shoes",
		price: 180,
		img_url:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/268e5f54-aee3-4c21-a7df-fa8c2067694a/invincible-3-mens-road-running-shoes-Xrd0px.png',
	},
	{
		title: 'Nike Air Max Pulse',
		description: "Men's Shoes",
		price: 150,
		img_url:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-mens-shoes-ShS3tL.png',
	},
	{
		title: 'Nike Air Zoom Flight 95',
		description: "Men's Shoes",
		price: 160,
		img_url:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e4e6d2f0-eb1b-4689-8a55-a7e5bb52fe3b/air-zoom-flight-95-mens-shoes-zc42bP.png',
		discount: 20,
	},
	{
		title: "Nike Air Force 1 '07",
		description: "Men's Shoes",
		price: 110,
		img_url:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-mens-shoes-5QFp5Z.png',
		discount: 15,
	},
];

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
	const [currentProduct, setCurrentProduct] = useState(EMPTY_PRODUCTSTATE);

  // Open Modal-window & Pass clicked product to ProductModal
	const openModal = (item) => {
		setCurrentProduct({
			key: item.key,
			title: item.title,
			description: item.description,
			price: item.price,
			image: item.image,
			discount: item.discount,
		});
		setProductModalIsShown(true);
	};

	const closeModal = () => {
		setProductModalIsShown(false);
	};

  // Return Product-component for each dummy product
	const productsList = DUMMY_PRODUCTS.map((item) => {
		return (
			<Product
				key={item.title}
				title={item.title}
				description={item.description}
				price={item.price}
				image={item.img_url}
				discount={item.discount}
				openModal={openModal}
			/>
		);
	});

	return (
		<Fragment>
			{productModalIsShown && <ProductModal product={currentProduct} onClose={closeModal} />}
			<div className={classes['product-grid']}>{productsList}</div>
		</Fragment>
	);
};

export default ProductGrid;
