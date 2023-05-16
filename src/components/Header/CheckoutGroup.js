import classes from './CheckoutGroup.module.css';

// Import svg file(s)
import basket from '../../assets/basket.svg';
import heart from '../../assets/heart.svg';
import menu from '../../assets/hamburger.svg';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

// Consists of 2 icons; heart and basket
const CheckoutGroup = (props) => {
	const cartCtx = useContext(CartContext);
	const { items } = cartCtx;

	const numberOfItems = items.reduce((cur, item) => {
		return cur + item.amount;
	}, 0);

	return (
		<div className={classes.checkoutGroup}>
			<button>
				<img src={heart} alt="Heart icon from https://tablericons.com/" />
			</button>
			<button className={classes.cartIcon} onClick={props.showCart}>
				{numberOfItems > 0 && <span className={classes.itemBadge}>{numberOfItems < 9 ? numberOfItems : '9+'}</span>}
				<img src={basket} alt="Basket icon from https://tablericons.com/" />
			</button>
			<button id={classes['menu-button']}>
				<img src={menu} alt="Basket icon from https://tablericons.com/" />
			</button>
		</div>
	);
};

export default CheckoutGroup;
