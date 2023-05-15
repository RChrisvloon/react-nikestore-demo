import React from 'react';
import Modal from '../../UI/Modal';
import classes from './ProductModal.module.css';
import DUMMY_PRODUCTS from '../../../store/DummyProducts';
import useDiscountCalc from '../../../hooks/use-discountCalc';

// Import svg file(s)
import cross from '../../../assets/cross.svg';
import heart from '../../../assets/heart.svg';

const ProductModal = (props) => {
	// Find product based on id passed in ProductGrid-component
	const [product] = DUMMY_PRODUCTS.filter((item) => item.id === props.productId);

	// Destructure passed product
	const { title, description, price, img_url: image, sub_images, discount } = product;

	// Get all thumbnail-images & return an img-element
	const subImagesContent = sub_images.map((img) => {
		return <img className={classes['thumbnail_img']} src={img} alt="Nike shoe thumbnail" />;
	});

	// Call custom-hook for calculating discounted price
	const newPrice = useDiscountCalc(price, discount);

	return (
		<Modal onClose={props.onClose}>
			<div className={classes['modal-header']}>
				<img
					className={classes['modal-header_closeBtn']}
					onClick={props.onClose}
					src={cross}
					alt="Copyright by https://tablericons.com/"
				/>
			</div>
			<div className={classes['modal-product_info']}>
				<h1 className={classes['modal-product_title']}>{title}</h1>
				<p className={classes['modal-product-description']}>{description}</p>
			</div>
			<div className={classes['price-section']}>
				<h4>Order this product for only:</h4>
				<p>
					{newPrice && `$${newPrice}`}
					<span className={`${newPrice && 'discount_line'}`}>${price}</span>
				</p>
				{newPrice && <p className={'discount_styling'}>{discount}% off</p>}
			</div>
			<div className={classes['modal-images_wrapper']}>
				<div className={classes['thumbnail-column']}>{subImagesContent}</div>
				<img
					className={classes['modal-product_image']}
					src={image}
					alt="Copyright by https://www.nike.com/"
				/>
			</div>
			<div className={classes['order-buttons']}>
				<button className={[classes['button-order'], classes['button-order_black']].join(' ')}>
					Add to bag
				</button>
				<button className={[classes['button-order'], classes['button-order_white']].join(' ')}>
					Favourite <img src={heart} alt="Heart icon" />
				</button>
			</div>
		</Modal>
	);
};

export default ProductModal;
