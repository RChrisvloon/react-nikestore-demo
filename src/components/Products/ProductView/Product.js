import React from 'react';
import classes from './Product.module.css';
import useDiscountCalc from '../../../hooks/use-discountCalc';

const Product = (props) => {
  // Call custom-hook for calculating discounted price
  const newPrice = useDiscountCalc(props.price, props.discount);

  const openModal = () => {
    props.openModal(props.id);
  }

	return (
		<div className={classes['product-card']} onClick={openModal}>
			<img
				className={classes['product-card_img']}
				src={props.image}
				alt="Copyright by https://www.nike.com/"
			/>
			<div className={classes['product-card_info']}>
				<h3 className={classes['product-card_title']}>{props.title}</h3>
				<h4 className={classes['product-card_subtitle']}>{props.description}</h4>
				<div className={classes['product-card_priceinfo']}>
					<p>
						{newPrice && `$${newPrice}`}
						<span className={`${newPrice && 'discount_line'}`}>${props.price}</span>
					</p>
					{newPrice && <p className={'discount_styling'}>{props.discount}% off</p>}
				</div>
			</div>
		</div>
	);
};

export default Product;
