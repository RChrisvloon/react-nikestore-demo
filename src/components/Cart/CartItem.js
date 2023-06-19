// React (Redux) imports
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../../store/slices/cartSlice';
import useGetProduct from '../../hooks/use-getProduct';
import DUMMY_SIZES from '../../data/DummySizes';

// Component imports
import ImageComponent from '../common/ImageComponent/ImageComponent';

// Asset imports
import classes from './CartItem.module.css';
import heart from '../../assets/heart.svg';
import trash from '../../assets/trash.svg';

const CartItem = (props) => {
	const dispatch = useDispatch();

	const [amount, setAmount] = useState(props.amount);

	// Get product and discounted price using custom-hooks
	const product = useGetProduct(props.id);

	// Update the local state when the amount prop changes
	useEffect(() => {
		setAmount(props.amount);
	}, [props.amount]);

	// Generate size & amount-options
	const sizeOptions = DUMMY_SIZES.map((item) => {
		return (
			<option key={item} value={item}>
				EU {item}
			</option>
		);
	});

	const amountOptions = Array.from({ length: 10 }, (_, index) => (
		<option key={index + 1} value={index + 1}>
			{index + 1}
		</option>
	));

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
		if (!amount || amount < 0 || amount > 10) {
			window.alert('Incorrect amount of this item in cart');
		}

		// Change size by calling changeSize store-method
		dispatch(
			cartSliceActions.changeSize({
				id: productId,
				oldSize: oldSize,
				newSize: newSize,
				amount: amount,
			})
		);
	};

	const amountChangeHandler = (event) => {
		// Get shoesize and new amount
		const shoeSize = props.size;
		const newAmount = +event.target.value;

		dispatch(
			cartSliceActions.changeAmount({
				id: product.id,
				shoeSize: shoeSize,
				price: product.price,
				discountedPrice: product.discountedPrice,
				discountPercentage: product.discountPercentage,
				newAmount: newAmount,
			})
		);
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
							{product.discountedPrice && `$${product.discountedPrice}`}
							<span className={`${product.discountedPrice && 'discount_line'}`}>${product.price}</span>
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
							<select value={amount} onChange={amountChangeHandler}>
								{amountOptions}
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
