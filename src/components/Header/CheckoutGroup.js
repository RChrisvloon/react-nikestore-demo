import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/uiSlice';
import classes from './CheckoutGroup.module.css';
import basket from '../../assets/basket.svg';
import heart from '../../assets/heart.svg';
import menu from '../../assets/hamburger.svg';

// Consists of 2 icons; heart and basket
const CheckoutGroup = () => {
	const dispatch = useDispatch();

	// Accessing cart data from store
	const toggleCartHandler = () => {
		dispatch(uiActions.toggleCart());
	};

	const cartState = useSelector((state) => state.cart);
	const { items } = cartState;
	let numberOfItems = 0;

	if (items) {
		numberOfItems = items.reduce((cur, item) => {
			return cur + item.amount;
		}, 0);
	}

	return (
		<div className={classes.checkoutGroup}>
			<button>
				<img src={heart} alt="Heart icon from https://tablericons.com/" />
			</button>
			<button className={classes.cartIcon} onClick={toggleCartHandler}>
				{numberOfItems > 0 && (
					<span className={classes.itemBadge}>{numberOfItems < 9 ? numberOfItems : '9+'}</span>
				)}
				<img src={basket} alt="Basket icon from https://tablericons.com/" />
			</button>
			<button id={classes['menu-button']}>
				<img src={menu} alt="Basket icon from https://tablericons.com/" />
			</button>
		</div>
	);
};

export default CheckoutGroup;
