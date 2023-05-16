import { useContext } from 'react';
import Modal from '../UI/Modal';
import cartContext from '../../store/cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';

// Import svg file(s)
import cross from '../../assets/cross.svg';

const Cart = (props) => {
	// Get cart information
	const cartCtx = useContext(cartContext);
	const totalAmount = cartCtx.totalAmount;
	const hasItems = cartCtx.items.length > 0;

	const cartItemsList = (
		<ul>
			{cartCtx.items.map((item) => (
				<CartItem key={item.id} id={item.id} amount={item.amount} />
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
					{!hasItems && <p>There are no items in your bag.</p>}
				</div>
				{hasItems && <div className={classes['cart-items_wrapper']}>{cartItemsList}</div>}
				<div className={classes.amount_wrapper}>
					<span>Total Amount: </span>
					<span>${totalAmount}</span>
				</div>
			</div>
		</Modal>
	);
};

export default Cart;
