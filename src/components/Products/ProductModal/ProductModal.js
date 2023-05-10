import React from 'react';
import Modal from '../../UI/Modal';
import classes from './ProductModal.module.css';
import DUMMY_PRODUCTS from '../../../store/DummyProducts';

const ProductModal = (props) => {
  // Find product based on id passed in ProductGrid-component
  const [product] = DUMMY_PRODUCTS.filter((item) => item.id === props.productId);

	// Destructure passed product
	const { title, description, price, img_url: image, sub_images, discount } = product;

  // Get all thumbnail-images & return an img-element
	const subImagesContent = sub_images.map((img) => {
		return <img className={classes['thumbnail_img']} src={img} alt="Nike shoe thumbnail" />;
	});

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
			<div className={classes['modal-images_wrapper']}>
				<div className={classes['thumbnail-column']}>{subImagesContent}</div>
				<img className={classes['modal-product_image']} src={image} alt="Shoe made by Nike." />
			</div>
		</Modal>
	);
};

export default ProductModal;
