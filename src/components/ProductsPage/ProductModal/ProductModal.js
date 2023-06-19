// React (Redux) imports
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../../../store/slices/cartSlice';
import useGetProduct from '../../../hooks/use-getProduct';
import DUMMY_SIZES from '../../../data/DummySizes';

// Component imports
import Modal from '../../common/Modal/Modal';
import SizePicker from './SizePicker';

// Asset imports
import classes from './ProductModal.module.css';
import cross from '../../../assets/cross.svg';
import heart from '../../../assets/heart.svg';
import ProductImageSection from '../../common/Product/ProductImageSection';

const ProductModal = (props) => {
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

		// Close the modal after a delay
		setTimeout(() => {
			props.onClose();
		}, 2000);
	};

	return (
		<Modal onClose={props.onClose}>
			<div className={classes['modal-inside_wrapper']}>
				<div className={classes['modal-header']}>
					<div className={classes['modal-product_info']}>
						<h1 className={classes['modal-product_title']}>{product.title}</h1>
						<p className={classes['modal-product-description']}>{product.description}</p>
					</div>
					<img
						className={'modal-header_closeBtn'}
						onClick={props.onClose}
						src={cross}
						alt="Copyright by https://tablericons.com/"
					/>
				</div>
				<div className={classes['price-section']}>
					<h4>Order this product for only:</h4>
					<p>
						{product.discountedPrice && `$${product.discountedPrice}`}
						<span className={`${product.discountedPrice && 'discount_line'}`}>${product.price}</span>
					</p>
					{product.discountedPrice && <p className={'discount_styling'}>{product.discountPercentage}% off</p>}
				</div>
				<SizePicker onSizeSelect={handleSizeSelect} />
        <ProductImageSection product={product} />
				<div className={'order-buttons'}>
					<button
						className={'button-order button-order_black'}
						onClick={cartItemAddHandler}
						disabled={isAddingToBag ? true : addToCartSuccess ? true : ''}
					>
						{isAddingToBag ? 'Adding...' : addToCartSuccess ? 'Successfully added to bag!' : 'Add to bag'}
					</button>
					<button className={'button-order button-order_white'}>
						Favourite <img src={heart} alt="Heart icon" />
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default ProductModal;
