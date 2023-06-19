// React (Redux) imports
import { useState } from 'react';

// Component imports
import SubImages from './SubImages';
import ImageComponent from '../ImageComponent/ImageComponent';

// Asset imports
import classes from './ProductImageSection.module.css';

const ProductImageSection = ({ product }) => {
	const [displayedImage, setDisplayedImage] = useState(false);

	// Image hover handlers
	const imageHoverHandler = (event) => {
		// Get src of image being hovered over
		const newImgSrc = event.target.src;
		setDisplayedImage(newImgSrc);
	};

	const resetImageHandler = () => {
		setDisplayedImage(false);
	};

	return (
		<div className={classes['product-images_wrapper']} onMouseLeave={resetImageHandler}>
			<SubImages subImages={product.sub_images} imageHoverHandler={imageHoverHandler} />
			<ImageComponent
				src={!displayedImage ? product.img_url : displayedImage}
				className={'product_image'}
				alt={'Copyright by https://www.nike.com/'}
			/>
		</div>
	);
};

export default ProductImageSection;
