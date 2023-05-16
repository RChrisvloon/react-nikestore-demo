import useGetProduct from '../../hooks/use-getProduct';
import ImageComponent from '../UI/ImageComponent/ImageComponent';
import classes from './CartItem.module.css';

const CartItem = (props) => {
	const product = useGetProduct(props.id);

	return (
		<li className={classes.item}>
			<div className={classes['item-wrapper_inner']}>
				<ImageComponent
					src={product.img_url}
					className={'cart-item_image'}
					alt={'Copyright by https://www.nike.com/'}
				/>
				<p>
					{product.id}. {product.title}. {product.price}
				</p>
			</div>
		</li>
	);
};

export default CartItem;
