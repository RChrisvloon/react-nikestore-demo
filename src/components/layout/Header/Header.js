// Component imports
import TopBar from './TopSection/TopBar';
import CheckoutGroup from './MiddleSection/CheckoutGroup';
import CategoryMenu from './MiddleSection/Categories/CategoryMenu';
import Banner from './LowerSection/Banner';

// Asset imports
import classes from './Header.module.css';
import nike from '../../../assets/nike.svg';

// Header consists of 3 parts: Top section(TopBar), Middle section(Logo, categories, favourite/basket-icons) and Lower section(Banner)
const Header = () => {
	return (
		<div className={classes.container}>
			<TopBar />
			<header className={classes.header}>
				<div className={classes['header-wrapper']}>
					<a className={classes['app-logo_wrapper']} href="https://www.chrisvanloon.nl/">
						<img className={classes['app-logo']} src={nike} alt="Copyright by https://www.nike.com/" />
					</a>
					<CategoryMenu />
					<CheckoutGroup />
				</div>
			</header>
			<Banner />
		</div>
	);
};

export default Header;
