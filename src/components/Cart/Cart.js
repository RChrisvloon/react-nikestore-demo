// React (Redux) imports
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceActions } from '../../store/slices/cartSlice';
import { uiSliceActions } from '../../store/slices/uiSlice';

// Component imports
import Modal from '../common/Modal/Modal';
import CartItem from './CartItem';

// Asset imports
import classes from './Cart.module.css';
import cross from '../../assets/cross.svg';

const Cart = (props) => {
	// State variables
	const dispatch = useDispatch();
	const [isCheckingout, setIsCheckingOut] = useState(false);
	const [checkoutIsSuccess, setCheckoutIsSuccess] = useState(false);
	const [totalAmount, setTotalAmount] = useState(0);

	// Accessing cart data from store
	const cartState = useSelector((state) => state.cart);
	const itemsInCart = cartState.items;
	const hasItems = itemsInCart.length > 0;

	// Calculate total amount based on items in the cart
	useEffect(() => {
		setTotalAmount(
			itemsInCart.reduce((total, item) => {
				const itemAmount = (item.discountedPrice || item.price) * item.amount;
				return total + itemAmount;
			}, 0)
		);
	}, [itemsInCart]);

	// Handler for showing/hiding cart
	const toggleCartHandler = () => {
		dispatch(uiSliceActions.toggleCart());
	};

	// Handler for removing a cart item
	const cartItemRemoveHandler = (id, size) => {
		dispatch(cartSliceActions.remove({ id: id, size: size }));
	};

	const checkoutHandler = () => {
		// If no items are in the cart
		if (!hasItems) {
			return;
		}

		// Checkout the cart & simulate waiting time
		setIsCheckingOut(true);
		setCheckoutIsSuccess(false);

		setTimeout(() => {
			dispatch(cartSliceActions.checkout());
			setIsCheckingOut(false);
		}, 1000);

		setTimeout(() => {
			setCheckoutIsSuccess(true);
		}, 1000);

		// Close the modal after a delay
		setTimeout(() => {
			dispatch(uiSliceActions.toggleCart());
		}, 3000);
	};

	// Generate a list of cart items
	const cartItemsList = (
		<ul>
			{cartState.items.map((item) => (
				<CartItem
					key={`${item.id}-${item.selectedSize}`}
					id={item.id}
					amount={item.amount}
					size={item.selectedSize}
					onRemove={cartItemRemoveHandler.bind(null, item.id, item.selectedSize)}
          isCheckingOut={isCheckingout}
				/>
			))}
		</ul>
	);

	return (
		<Modal onClose={toggleCartHandler}>
			<div className={classes['cart_wrapper']}>
				<div className={classes['cart-header-main_wrapper']}>
					<div className={classes['cart-header-sub_wrapper']}>
						<h2 className={classes['cart-header_text']}>Your bag</h2>
						<img
							className={'modal-header_closeBtn'}
							onClick={toggleCartHandler}
							src={cross}
							alt="Copyright by https://tablericons.com/"
						/>
					</div>
				</div>
				{!hasItems && (
					<p className={classes['empty-state_text']}>
						{checkoutIsSuccess ? 'Order has been placed!' : 'There are no items in your bag.'}
					</p>
				)}
				{hasItems && <div className={classes['cart-items_wrapper']}>{cartItemsList}</div>}
				<div className={classes.amount_wrapper}>
					<h2>Total Amount: </h2>
					<span>${totalAmount.toFixed(2)}</span>
				</div>
				<div className={'order-buttons'}>
					<button
						className={`button-order button-order_black ${!hasItems ? 'disabled' : ''}`}
						onClick={checkoutHandler}
						disabled={!hasItems ? true : false}
					>
						{isCheckingout
							? 'Checking out...'
							: checkoutIsSuccess
							? 'Successfully checked out!'
							: 'Checkout'}
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default Cart;
