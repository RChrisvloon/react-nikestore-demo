// Component imports
import Product from './Product';

// Asset imports
import DUMMY_PRODUCTS from '../../../data/DummyProducts';
import classes from './ProductGrid.module.css';

// View that shoes all products
const ProductGrid = (props) => {
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
			<div className={classes['product-grid']}>{productsList}</div>
		</div>
	);
};

export default ProductGrid;
