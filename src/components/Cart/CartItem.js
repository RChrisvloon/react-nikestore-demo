import useGetProduct from '../../hooks/use-getProduct';
import useDiscountCalc from '../../hooks/use-discountCalc';
import ImageComponent from '../UI/ImageComponent/ImageComponent';
import classes from './CartItem.module.css';

// Import svg file(s)
import heart from '../../assets/heart.svg';
import trash from '../../assets/trash.svg';

const CartItem = (props) => {
	const product = useGetProduct(props.id);
	const newPrice = useDiscountCalc(product.price, product.discount);

	return (
		<li className={classes.item}>
			<div className={classes['item-wrapper_inner']}>
				<div className={classes['image_wrapper']}>
					<ImageComponent
						src={product.img_url}
						className={'cart-item_image'}
						alt={'Copyright by https://www.nike.com/'}
					/>
				</div>
				<div className={classes['cart-item-information_wrapper']}>
					<div className={classes['cart-item-information-title_wrapper']}>
						<h3 className={classes['cart-item-information_title']}>{product.id}. {product.title}</h3>
						<div>
							{newPrice && `$${newPrice}`}
							<span className={`${newPrice && 'discount_line'}`}>${product.price}</span>
						</div>
					</div>
					<p className={classes['cart-item-information_subtext']}>{product.description}</p>
					<div className={classes['size-amount_wrapper']}>
						<div className={classes['dropdown_wrapper']}>
							<label>Size:</label>
							<select>
								<option>{props.size}</option>
							</select>
						</div>
						<div className={classes['dropdown_wrapper']}>
							<label>Amount:</label>
							<select defaultValue={props.amount} >
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
							</select>
						</div>
					</div>
					<div className={classes['cart-item-actions_wrapper']}>
						<button>
							<img src={heart} alt="" />
						</button>
						<button onClick={props.onRemove}>
							<img src={trash} alt="" />
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
