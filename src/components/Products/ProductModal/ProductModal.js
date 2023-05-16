import React, { useContext, useState } from 'react';
import Modal from '../../UI/Modal';
import classes from './ProductModal.module.css';
import DUMMY_PRODUCTS from '../../../store/DummyProducts';
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

	// Find product based on id passed in ProductGrid-component
	const [product] = DUMMY_PRODUCTS.filter((item) => item.id === props.productId);

	// Destructure passed product
	const { title, description, price, img_url: image, sub_images, discount } = product;

	// Get all thumbnail-images & return an img-element
	const subImagesContent = sub_images.map((img, key) => {
    return <ImageComponent key={key} className={'thumbnail_img'} src={img} alt={"Thumbnail owned by https://www.nike.com/"}/>
	});

	// Call custom-hook for calculating discounted price
	const newPrice = useDiscountCalc(price, discount);

	// Handle shoe size from SizePicker-component
	const handleSizeSelect = (size) => {
		setSelectedSize(size);
	};

	// TO-DO -- CALL CARTCONTEXT TO ADD TO BAG
	const cartItemAddHandler = () => {
    if (!selectedSize) {
      console.log('Please select a valid shoesize.');
      return;
    }
		cartCtx.addItem({ product, selectedSize });
	};

	return (
		<Modal onClose={props.onClose}>
			<div className={classes['modal-inside_wrapper']}>
				<div className={classes['modal-header']}>
					<div className={classes['modal-product_info']}>
						<h1 className={classes['modal-product_title']}>{title}</h1>
						<p className={classes['modal-product-description']}>{description}</p>
					</div>
					<img
						className={classes['modal-header_closeBtn']}
						onClick={props.onClose}
						src={cross}
						alt="Copyright by https://tablericons.com/"
					/>
				</div>
				<div className={classes['price-section']}>
					<h4>Order this product for only:</h4>
					<p>
						{newPrice && `$${newPrice}`}
						<span className={`${newPrice && 'discount_line'}`}>${price}</span>
					</p>
					{newPrice && <p className={'discount_styling'}>{discount}% off</p>}
				</div>
				<SizePicker onSizeSelect={handleSizeSelect} />
				{/* Product images */}
				<div className={classes['modal-images_wrapper']}>
					<div className={classes['thumbnail-column']}>
            {subImagesContent}
          </div>
          <ImageComponent src={image} className={'modal-product_image'} alt={"Copyright by https://www.nike.com/"}/>
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
