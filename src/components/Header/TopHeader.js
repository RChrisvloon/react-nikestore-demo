import React, { Fragment } from 'react';
import classes from './TopHeader.module.css';

// Import svg file(s)
import jordan from '../../assets/jordan.svg';
import converse from '../../assets/converse.svg';

const TopHeader = (props) => {
	return (
		<div className={classes.topHeader}>
			<div className={classes.topHeader_wrapper}>
				<ul className={classes.brandMenu}>
					<li className={classes.brandMenu_item}>
						<a href={'/'}>
							<img src={jordan} alt="Icon of Jordan" />
						</a>
					</li>
					<li className={classes.brandMenu_item}>
						<a href={'/'}>
							<img src={converse} alt="Icon of Jordan" />
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

export default TopHeader;
