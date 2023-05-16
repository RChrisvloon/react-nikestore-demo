import React, { useContext, useState } from 'react';
import Modal from '../../UI/Modal';
import classes from './ProductModal.module.css';
import useGetProduct from '../../../hooks/use-getProduct';
import useDiscountCalc from '../../../hooks/use-discountCalc';
import CartContext from '../../../store/cart-context';
import SizePicker from './SizePicker';
import ImageComponent from '../../UI/ImageComponent/ImageComponent';

// Import svg file(s)
import cross from '../../../assets/cross.svg';
import heart from '../../../assets/heart.svg';

const ProductModal = (props) => {
	const [selectedSize, setSelectedSize] = useState(false);
	const cartCtx = useContext(CartContext);
  const product = useGetProduct(props.productId);

	// Get all thumbnail-images & return an ImageComponent
	const subImagesContent = product.sub_images.map((img, key) => {
		return (
			<ImageComponent
				key={key}
				className={'thumbnail_img'}
				src={img}
				alt={'Thumbnail owned by https://www.nike.com/'}
			/>
		);
	});

	// Call custom-hook for calculating discounted price
	const newPrice = useDiscountCalc(product.price, product.discount);

	// Handle shoe size from SizePicker-component
	const handleSizeSelect = (size) => {
		setSelectedSize(size);
	};

	const cartItemAddHandler = () => {
		if (!selectedSize) {
			window.alert('Please select a valid shoesize.');
			return;
		}

		cartCtx.addItem({ id: product.id, price: product.price, newPrice, selectedSize, amount: 1 });

		props.onClose();
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
				{/* Product images */}
				<div className={classes['modal-images_wrapper']}>
					<div className={classes['thumbnail-column']}>{subImagesContent}</div>
					<ImageComponent
						src={product.img_url}
						className={'modal-product_image'}
						alt={'Copyright by https://www.nike.com/'}
					/>
				</div>
				{/* Checkout section */}
				<div className={classes['order-buttons']}>
					<button
						className={[classes['button-order'], classes['button-order_black']].join(' ')}
						onClick={cartItemAddHandler}
					>
						Add to bag
					</button>
					<button className={[classes['button-order'], classes['button-order_white']].join(' ')}>
						Favourite <img src={heart} alt="Heart icon" />
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default ProductModal;
