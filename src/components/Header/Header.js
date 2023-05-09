import React from 'react';
import classes from './Header.module.css';
import TopHeader from './TopHeader';

// Import svg file(s)
import nike from '../../assets/nike.svg';
import CheckoutGroup from './CheckoutGroup';
import CategoryMenu from './CategoryMenu';
import Banner from '../UI/Banner';

const Header = (props) => {
	return (
		<div className={classes.container}>
			<TopHeader />
			<header className={classes.header}>
				<div className={classes['header-wrapper']}>
					<a href="https://www.nike.com/">
						<img className={classes['app-logo']} src={nike} alt="Nike logo" />
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
