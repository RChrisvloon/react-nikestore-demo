import React, { useContext, useState } from 'react';
import Modal from '../../UI/Modal';
import classes from './ProductModal.module.css';
import useGetProduct from '../../../hooks/use-getProduct';
import useDiscountCalc from '../../../hooks/use-discountCalc';
import CartContext from '../../../store/cart-context';
import SizePicker from './SizePicker';
import ImageComponent from '../../UI/ImageComponent/ImageComponent';
import DUMMY_SIZES from '../../../store/DummySizes';

// Import svg file(s)
import cross from '../../../assets/cross.svg';
import heart from '../../../assets/heart.svg';

const ProductModal = (props) => {
	// State variables
	const [selectedSize, setSelectedSize] = useState(false);
	const [isAddingToBag, setIsAddingToBag] = useState(false);
	const [addToCartSuccess, setAddToCartSuccess] = useState(false);
	const [displayedImage, setDisplayedImage] = useState(false);

	// Context
	const cartCtx = useContext(CartContext);

	// Fetch product data
	const product = useGetProduct(props.productId);

	// Change the 'active' image on hover
	const imageHoverHandler = (event) => {
		// Get src of image being hovered over
		const newImgSrc = event.target.src;

		// Set active image to new image
		setDisplayedImage(newImgSrc);
	};

  const resetImageHandler = () => {
    setDisplayedImage(false);
  }

	// Generate sub-images content
	const subImagesContent = product.sub_images.map((img, key) => {
		return (
			<ImageComponent
				key={key}
				className={'thumbnail_img'}
				src={img}
				alt={'Thumbnail owned by https://www.nike.com/'}
				onMouseOver={imageHoverHandler}
			/>
		);
	});

	// Calculate discounted price
	const newPrice = useDiscountCalc(product.price, product.discount);

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

		// IMPROVE -- Add try catch to handle failed added items
		// IMPROVE -- When api-based, request status can be used to display userfeedback
		setIsAddingToBag(true);
		setAddToCartSuccess(false);

		// Add item to the cart (With artificial delay)
		setTimeout(() => {
			cartCtx.addItem({ id: product.id, price: product.price, newPrice, selectedSize, amount: 1 });
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
						{newPrice && `$${newPrice}`}
						<span className={`${newPrice && 'discount_line'}`}>${product.price}</span>
					</p>
					{newPrice && <p className={'discount_styling'}>{product.discount}% off</p>}
				</div>
				<SizePicker onSizeSelect={handleSizeSelect} />
				<div className={classes['modal-images_wrapper']} onMouseLeave={resetImageHandler}>
					<div className={classes['thumbnail-column']}>{subImagesContent}</div>
					<ImageComponent
						src={!displayedImage ? product.img_url : displayedImage}
						className={'modal-product_image'}
						alt={'Copyright by https://www.nike.com/'}
					/>
				</div>
				<div className={'order-buttons'}>
					<button className={'button-order button-order_black'} onClick={cartItemAddHandler}>
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
