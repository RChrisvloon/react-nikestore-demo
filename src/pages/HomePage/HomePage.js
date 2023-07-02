// React (Redux) imports
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Asset imports
import classes from './HomePage.module.css';
import introImage from '../../assets/intro-image-homepage.webp';
import ImageComponent from '../../components/common/ImageComponent/ImageComponent';

const HomePage = () => {
	return (
		<Fragment>
			<div className={'imageWrapper'}>
				<ImageComponent
					className={'intro-section_image'}
					src={introImage}
					alt={'Copyright belongs to https://www.nike.com/'}
				/>
			</div>
			<div className="content-inner">
				<div className={classes['intro-section']}>
					<div className={classes['title_wrapper']}>
						<h1 className="title_large">
							clean kicks,
							<br />
							fresh style
						</h1>
					</div>
					<div className={classes['intro-subSection']}>
						<p>Dial any outfit to 11 with the always crisp, always comfy Air Max 90 and more.</p>

						<button className="basic-button">
							<Link to={'/products'}>Shop</Link>
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default HomePage;
