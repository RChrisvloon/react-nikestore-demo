import React from 'react';
import classes from './Header.module.css';
import TopHeader from './TopHeader';

// Import svg file(s)
import nike from '../../assets/nike.svg';
import CheckoutGroup from './CheckoutGroup';
import CategoryMenu from './CategoryMenu';
import Banner from '../UI/Banner/Banner';

// Header consists of 3 parts: Topheader, header(img, CategoryMenu, CheckoutGroup) & Banner
const Header = (props) => {
	return (
		<div className={classes.container}>
			<TopHeader />
			<header className={classes.header}>
				<div className={classes['header-wrapper']}>
					<a className={classes['app-logo_wrapper']} href="https://www.chrisvanloon.nl/">
						<img className={classes['app-logo']} src={nike} alt="Copyright by https://www.nike.com/"/>
					</a>
					<CategoryMenu />
          {/*IMPROVE: Passing props down multiple levels is bad, React redux will fix this later*/}
					<CheckoutGroup showCart={props.showCart}/>
				</div>
			</header>
      <Banner />
		</div>
	);
};

export default Header;
