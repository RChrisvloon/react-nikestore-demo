import { useContext } from 'react';
import cartContext from '../../store/cart-context';
import useGetProduct from '../../hooks/use-getProduct';
import useDiscountCalc from '../../hooks/use-discountCalc';
import ImageComponent from '../UI/ImageComponent/ImageComponent';
import classes from './CartItem.module.css';
import DUMMY_SIZES from '../../store/DummySizes';

// Import svg file(s)
import heart from '../../assets/heart.svg';
import trash from '../../assets/trash.svg';

const CartItem = (props) => {
	// Get product and discounted price using custom-hooks
	const product = useGetProduct(props.id);
	const newPrice = useDiscountCalc(product.price, product.discount);

	// Context
	const cartCtx = useContext(cartContext);

	// Generate sizeoption-elements
	const sizeOptions = DUMMY_SIZES.map((item) => {
		return (
			<option key={item} value={item}>
				EU {item}
			</option>
		);
	});

	// Handle user changing shoe size
	const sizeChangeHandler = (event) => {
		// Get product id and amount of the current product
		const productId = props.id;
    const amount = props.amount;

		// Get old & newly seleted size
		const oldSize = props.size;
		const newSize = +event.target.value;

    // Check if newly selected shoesize is valid
    if (!newSize || newSize > Math.max(...DUMMY_SIZES) || newSize < Math.min(...DUMMY_SIZES)) {
      window.alert('Invalid shoesize selected!');
    }

    // Check if the current amount of this item is valid (MIGHT BE UNNECESSARY TO CHECK SINCE IT PROBABLY WOULD'VE BROKEN ALREADY)
    if (!amount || amount < 0 || amount > 9) {
      window.alert('Incorrect amount of this item in cart');
    }

		// Call CartContext changeSizeHandler
		cartCtx.changeSize({ id: productId, oldSize: oldSize, newSize: newSize, amount: amount });
	};

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
						<h3 className={classes['cart-item-information_title']}>
							{product.id}. {product.title}
						</h3>
						<div>
							{newPrice && `$${newPrice}`}
							<span className={`${newPrice && 'discount_line'}`}>${product.price}</span>
						</div>
					</div>
					<p className={classes['cart-item-information_subtext']}>{product.description}</p>
					<div className={classes['size-amount_wrapper']}>
						<div className={classes['dropdown_wrapper']}>
							<label>Size:</label>
							<select defaultValue={props.size} onChange={sizeChangeHandler}>
								{sizeOptions}
							</select>
						</div>
						<div className={classes['dropdown_wrapper']}>
							<label>Amount:</label>
							<select defaultValue={props.amount}>
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
