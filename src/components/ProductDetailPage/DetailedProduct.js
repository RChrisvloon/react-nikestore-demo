// React (Redux) imports
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import useGetProduct from '../../hooks/use-getProduct';
import ProductImageSection from '../common/Product/ProductImageSection';
import { cartSliceActions } from '../../store/slices/cartSlice';
import DUMMY_SIZES from '../../data/DummySizes';

// Component imports
import SizePicker from '../ProductsPage/ProductModal/SizePicker';
import BackNavigation from '../common/BackNavigation/BackNavigation';

// Asset imports
import classes from './DetailedProduct.module.css';
import heart from '../../assets/heart.svg';

const DetailedProduct = (props) => {
	const dispatch = useDispatch();

	// State variables
	const [selectedSize, setSelectedSize] = useState(false);
	const [isAddingToBag, setIsAddingToBag] = useState(false);
	const [addToCartSuccess, setAddToCartSuccess] = useState(false);

	// Fetch product data & Calculate discounted price
	const product = useGetProduct(props.productId);

	// Handler for shoe size selection
	const handleSizeSelect = (size) => {
		setSelectedSize(size);
	};

	// Handler for adding item to cart
	const cartItemAddHandler = () => {
		// Check if valid size is selected
		if (
			!selectedSize ||
			selectedSize > Math.max(...DUMMY_SIZES) ||
			selectedSize < Math.min(...DUMMY_SIZES)
		) {
			window.alert('Invalid shoesize selected!');
			return;
		}

		// TODO -- Add try catch to handle failed added items
		// TODO -- When api-based, request status can be used to display userfeedback
		setIsAddingToBag(true);
		setAddToCartSuccess(false);

		// Add item to the cart (With artificial delay)
		setTimeout(() => {
			dispatch(
				cartSliceActions.add({
					id: product.id,
					price: product.price,
					discountedPrice: product.discountedPrice,
					discountPercentage: product.discountPercentage,
					selectedSize,
					amount: 1,
				})
			);
			setIsAddingToBag(false);
		}, 1000);

		setTimeout(() => {
			setAddToCartSuccess(true);
		}, 1000);

		// Reset the state variables (User might add item again)
		setTimeout(() => {
			setAddToCartSuccess(false);
		}, 3000);
	};

	return (
		<Fragment>
			<div className={classes['product_wrapper']}>
				<ProductImageSection product={product} />
				<div className={classes['product-information_wrapper']}>
					<div>
						<h1 className={classes['product_title']}>{product.title}</h1>
						<p className={classes['product_subTitle']}>{product.description}</p>
					</div>
					<div className={classes['product-price_wrapper']}>
						<p className={classes['product_price']}>
							{product.discountedPrice && `$${product.discountedPrice}`}
							<span className={`${product.discountedPrice && 'discount_line'}`}>${product.price}</span>
						</p>
						{product.discountedPrice && (
							<p className={'discount_styling'}>{product.discountPercentage}% off</p>
						)}
					</div>
					<SizePicker onSizeSelect={handleSizeSelect} />
					<div className={'order-buttons'}>
						<button
							className={'button-order button-order_black'}
							onClick={cartItemAddHandler}
							disabled={isAddingToBag ? true : addToCartSuccess ? true : ''}
						>
							{isAddingToBag
								? 'Adding...'
								: addToCartSuccess
								? 'Successfully added to bag!'
								: 'Add to bag'}
						</button>
						<button className={'button-order button-order_white'}>
							Favourite <img src={heart} alt="Heart icon" />
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default DetailedProduct;
