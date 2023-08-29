// Asset imports
import classes from './ProfileFavourites.module.css';
import HorizontalCarousel from '../common/Carousel/HorizontalCarousel';

const ProfileFavourites = () => {
	// Fetch user's favourite products

	return (
		<section className={classes.wrapper}>
			<HorizontalCarousel title={'Favourites'}/>
		</section>
	);
};

export default ProfileFavourites;
