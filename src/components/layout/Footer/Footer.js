// Asset imports
import classes from './Footer.module.css';
import twitterLogo from '../../../assets/twitter-icon.svg';
import facebookLogo from '../../../assets/facebook-icon.svg';
import youtubeLogo from '../../../assets/youtube-icon.svg';
import instagramLogo from '../../../assets/instagram-icon.svg';

const Footer = (props) => {
	return (
		<footer className={classes.footer}>
			<div className={classes['body_wrapper']}>
				<div className={classes['body']}>
					<div className={classes['columns']}>
						<div className={classes['column']}>
							<p className={classes['column_title']}>Gift Cards</p>
							<ul className={[classes['column_items'], classes.highlighted].join(' ')}>
								<li>Promotions</li>
								<li>Find a store</li>
								<li>Become a member</li>
								<li>Nike Journal</li>
								<li>Send us feedback</li>
							</ul>
						</div>
						<div className={classes['column']}>
							<p className={classes['column_title']}>Get help</p>
							<ul className={[classes['column_items'], classes.nonHighlighted].join(' ')}>
								<li>Order Status</li>
								<li>Shipping and Delivery</li>
								<li>Returns</li>
								<li>Order Cancellation</li>
								<li>Payment Options</li>
								<li>Gift Card Balance</li>
								<li>Contact Us</li>
							</ul>
						</div>
						<div className={classes['column']}>
							<p className={classes['column_title']}>About Nike</p>
							<ul className={[classes['column_items'], classes.nonHighlighted].join(' ')}>
								<li>News</li>
								<li>Careers</li>
								<li>Investors</li>
								<li>Purpose</li>
								<li>Sustainability</li>
							</ul>
						</div>
						<div className={classes['column']}>
							<p className={classes['column_title']}>Join Us</p>
							<ul className={[classes['column_items'], classes.nonHighlighted].join(' ')}>
								<li>Nike App</li>
								<li>Nike Run Club</li>
								<li>Nike Training Club</li>
								<li>SNKRS</li>
							</ul>
						</div>
					</div>
					<div className={classes['socialMenu']}>
						<ul>
							<li>
								<a href={'https://twitter.com/Nike'}>
									<img src={twitterLogo} alt="Twitter logo from https://tablericons.com/" />
								</a>
							</li>
							<li>
								<a href={'https://www.facebook.com/nike'}><img src={facebookLogo} alt="Facebook logo from https://tablericons.com/" /></a>
							</li>
							<li>
								<a href={'https://www.youtube.com/user/nike'}><img src={youtubeLogo} alt="YouTube logo from https://tablericons.com/" /></a>
							</li>
							<li>
								<a href={'https://instagram.com/nike'}><img src={instagramLogo} alt="Instagram logo from https://tablericons.com/" /></a>
							</li>
						</ul>
					</div>
				</div>
				<div className={classes['sub_footer']}>
					<p>© 2023 Nike, Inc. All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
