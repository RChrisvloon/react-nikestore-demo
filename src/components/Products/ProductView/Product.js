import React from 'react';
import classes from './Product.module.css';

const Product = (props) => {
	const calculateDiscount = () => {
		if (props.discount === 0 || !props.discount) {
			return false;
		}

		const newPrice = (props.price * (100 - props.discount)) / 100;
		return newPrice;
	};

	const newPrice = calculateDiscount();

  const openModal = () => {
    props.openModal(props);
  }

	return (
		<div className={classes['product-card']} onClick={openModal}>
			<img
				className={classes['product-card_img']}
				src={props.image}
				alt="Colorful shoe made by Nike"
			/>
			<div className={classes['product-card_info']}>
				<h3 className={classes['product-card_title']}>{props.title}</h3>
				<h4 className={classes['product-card_subtitle']}>{props.description}</h4>
				<div className={classes['product-card_priceinfo']}>
					<p>
						{newPrice && `$${newPrice}`}{' '}
						<span className={`${newPrice && classes.discounted}`}>${props.price}</span>
					</p>
					{newPrice && <p className={classes['priceinfo_discount']}>{props.discount}% off</p>}
				</div>
			</div>
		</div>
	);
};

export default Product;
