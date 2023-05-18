import { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import cartContext from '../../store/cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';

// Import svg file(s)
import cross from '../../assets/cross.svg';

const Cart = (props) => {
	// State variables
	const [isCheckingout, setIsCheckingOut] = useState(false);
	const [checkoutIsSuccess, setCheckoutIsSuccess] = useState(false);

	// Accessing the cart context
	const cartCtx = useContext(cartContext);

	// Extracting totalamount and checking if there are items in the cart
	const totalAmount = cartCtx.totalAmount;
	const hasItems = cartCtx.items.length > 0;

	// Handler for removing a cart item
	const cartItemRemoveHandler = (id, size) => {
		cartCtx.removeItem({ id, size });
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
			cartCtx.checkoutCart();
			setIsCheckingOut(false);
		}, 1000);

		setTimeout(() => {
			setCheckoutIsSuccess(true);
		}, 1000);

		// Close the modal after a delay
		setTimeout(() => {
			props.hideCart();
		}, 3000);
	};

	// Generate a list of cart items
	const cartItemsList = (
		<ul>
			{cartCtx.items.map((item) => (
				<CartItem
					key={`${item.id}-${item.selectedSize}`}
					id={item.id}
					amount={item.amount}
					size={item.selectedSize}
					onRemove={cartItemRemoveHandler.bind(null, item.id, item.selectedSize)}
				/>
			))}
		</ul>
	);

	return (
		<Modal onClose={props.hideCart}>
			<div className={classes['cart_wrapper']}>
				<div className={classes['cart-header-main_wrapper']}>
					<div className={classes['cart-header-sub_wrapper']}>
						<h2 className={classes['cart-header_text']}>Your bag</h2>
						<img
							className={'modal-header_closeBtn'}
							onClick={props.hideCart}
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
