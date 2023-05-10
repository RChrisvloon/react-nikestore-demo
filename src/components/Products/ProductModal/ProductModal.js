import React from 'react';
import Modal from '../../UI/Modal';
import classes from './ProductModal.module.css';

const ProductModal = (props) => {
	// Destructure passed product
	const { title, description, price, image, discount } = props.product;

	return (
		<Modal onClose={props.onClose}>
			<div className={classes['modal-header']}>
				<h1>{title}</h1>
				<p className={classes['modal-header_closeBtn']} onClick={props.onClose}>
					X
				</p>
			</div>
			<p className={classes['modal-product-description']}>{description}</p>
			<p className={classes['modal-product-price']}>Price ${price}</p>
			<p>Discount: {discount}</p>
			<img className={classes['modal-product_image']} src={image} alt="Shoe made by Nike." />
		</Modal>
	);
};

export default ProductModal;
