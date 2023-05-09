import classes from './CheckoutGroup.module.css';

// Import svg file(s)
import basket from '../../assets/basket.svg';
import heart from '../../assets/heart.svg';

const CheckoutGroup = (props) => {
	return (
		<div className={classes.checkoutGroup}>
			<a href="/">
				<img src={heart} alt="Heart icon" />
			</a>
			<a href="/">
				<img src={basket} alt="Basket icon" />
			</a>
		</div>
	);
};

export default CheckoutGroup;
