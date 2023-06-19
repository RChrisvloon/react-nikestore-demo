// Component imports
import ImageComponent from '../ImageComponent/ImageComponent';

// Asset imports
import classes from './SubImages.module.css';

const SubImages = (props) => {
	return (
		<div className={classes['thumbnail-column']}>
			{props.subImages.map((img, key) => (
				<ImageComponent
					key={key}
					className={'thumbnail_img'}
					src={img}
					alt={'Thumbnail owned by https://www.nike.com/'}
					onMouseOver={props.imageHoverHandler}
				/>
			))}
		</div>
	);
};

export default SubImages;
