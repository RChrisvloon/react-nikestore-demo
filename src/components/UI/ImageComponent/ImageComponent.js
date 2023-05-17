import { Fragment, useState } from 'react';
import classes from './ImageComponent.module.css';
import Spinner from '../Spinner/Spinner';

// ImageComponent that displays an image with optional loading spinner
const ImageComponent = (props) => {
	// State to track if the image is loading or not
	const [isLoading, setIsLoading] = useState(true);

	// Event handler for image load
	const handleImageLoad = () => {
		setIsLoading(false);
	};

	return (
		<Fragment>
			{/* Display the spinner while the image is loading */}
			{isLoading && <Spinner />}

			{/* Render the image component */}
			<img
				className={[classes[props.className], isLoading ? 'is-hidden' : ''].join(' ')}
				src={props.src}
				alt={props.alt}
				onLoad={handleImageLoad}
				onClick={props.onClick}
			/>
		</Fragment>
	);
};

export default ImageComponent;
