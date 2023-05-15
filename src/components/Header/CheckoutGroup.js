import classes from './CheckoutGroup.module.css';

// Import svg file(s)
import basket from '../../assets/basket.svg';
import heart from '../../assets/heart.svg';
import menu from '../../assets/hamburger.svg';

// Consists of 2 icons; heart and basket
const CheckoutGroup = (props) => {
	return (
		<div className={classes.checkoutGroup}>
			<a href="/">
				<img src={heart} alt="Heart icon from https://tablericons.com/" />
			</a>
			<a href="/">
				<img src={basket} alt="Basket icon from https://tablericons.com/" />
			</a>
      <button id={classes['menu-button']}>
				<img src={menu} alt="Basket icon from https://tablericons.com/" />
			</button>
		</div>
	);
};

export default CheckoutGroup;
