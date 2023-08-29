// React (Redux) imports
import { useNavigate } from 'react-router-dom';

// Component imports
import ImageComponent from '../../common/ImageComponent/ImageComponent';

// Asset imports
import classes from './Product.module.css';

const Product = (props) => {
	const navigate = useNavigate();

	const goToProduct = () => {
		// Check if clicked productId exists
		if (!props.id) {
			window.alert('Product id could not be found!');
			return;
		}

		navigate('/products/' + props.id);
	};

	return (
		<div className={classes['product-card']} onClick={goToProduct}>
			<ImageComponent
				className={'product-card_img'}
				src={props.image}
				alt={'Copyright by https://www.nike.com/'}
			/>
			<div className={classes['product-card_info']}>
				<h3 className={classes['product-card_title']}>
					{props.id}. {props.title}
				</h3>
				<h4 className={classes['product-card_subtitle']}>{props.description}</h4>
				<div className={classes['product-card_priceinfo']}>
					<p>
						{props.discountedPrice && `$${props.discountedPrice}`}
						<span className={`${props.discountedPrice && 'discount_line'}`}>${props.price}</span>
					</p>
					{props.discountedPrice && <p className={'discount_styling'}>{props.discountPercentage}% off</p>}
				</div>
			</div>
		</div>
	);
};

export default Product;
