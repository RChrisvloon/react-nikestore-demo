// React (Redux) imports
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from '../../../store/slices/uiSlice';
import DUMMY_PRODUCTS from '../../../data/DummyProducts';

// Component imports
import Product from './Product';
import ProductModal from '../ProductModal/ProductModal';

// Asset imports
import classes from './ProductGrid.module.css';

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
		dispatch(uiSliceActions.openProductModal());
	};

	// Function to close the product modal
	const closeModal = () => {
		dispatch(uiSliceActions.closeProductModal());
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
        discountedPrice={item.discountedPrice}
        discountPercentage={item.discountPercentage}
				image={item.img_url}
				sub_images={item.sub_images}
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
