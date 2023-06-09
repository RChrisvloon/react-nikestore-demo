// Asset Imports
import classes from './TopBar.module.css';
import jordan from '../../../../assets/jordan.svg';
import converse from '../../../../assets/converse.svg';

const TopBar = (props) => {
	return (
		<div className={classes.topBar}>
			<div className={classes.topBar_wrapper}>
				<ul className={classes.brandMenu}>
					<li className={classes.brandMenu_item}>
						<a href={'https://www.nike.com/jordan'}>
							<img src={jordan} alt="Copyright by https://www.nike.com/" />
						</a>
					</li>
					<li className={classes.brandMenu_item}>
						<a href={'https://www.converse.com/'}>
							<img src={converse} alt="Copyright by https://www.converse.com/" />
						</a>
					</li>
				</ul>
				<div className={classes.userMenu}>
					<div className={classes.userMenu_item}>
						<a href={'/'}>Find a store</a>
						<span>|</span>
					</div>
					<div className={classes.userMenu_item}>
						<a href={'/'}>Help</a>
						<span>|</span>
					</div>
					<div className={classes.userMenu_item}>
						<a href={'/'}>Join us</a>
						<span>|</span>
					</div>
					<div className={classes.userMenu_item}>
						<a href={'/'}>Sign in</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
