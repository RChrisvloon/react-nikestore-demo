import { useState, useEffect, useCallback } from 'react';
import classes from './Banner.module.css';

// Import svg file(s)
import leftArrow from '../../../assets/left-arrow.svg';
import rightArrow from '../../../assets/right-arrow.svg';
import Slide from './Slide';

// Default Slides for the banner-component
const SLIDES = [
	{
		id: 1,
		text: 'LIMITED TIME: EARN $75 WITH A NEW APPLE CARD.',
		subText: 'Learn more. Terms apply.',
	},
	{
		id: 2,
		text: 'FREE SHIPPING + RETURNS, FREE MEMBERSHIP, EXCLUSIVE PRODUCTS',
		subText: 'Join Now',
	},
	{
		id: 3,
		text: 'NEW MARKDOWNS: UP TO 40% OFF',
		subText: 'Shop just-reduced styles—no code needed.',
	},
	{
		id: 4,
		text: "LAST MINUTE GIFT FOR MOTHER'S DAY",
		subText: 'Shop online for in-store pickup today—or get a Nike Gift Card.',
	},
];

const Banner = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlideHandler = useCallback(() => {
		// Right-arrow is clicked & last slide is reached
		if (currentSlide === SLIDES.length - 1) {
			// Go to first slide
			setCurrentSlide(0);
		} else {
			// Otherwise, go to next slide
			setCurrentSlide((prevState) => prevState + 1);
		}
	}, [currentSlide]);

	const prevSlideHandler = () => {
		// Left-arrow is clicked & user is on the first slide
		if (currentSlide === 0) {
			// Go to last slide
			setCurrentSlide(SLIDES.length - 1);
		} else {
			// Otherwise, go back 1 slide
			setCurrentSlide((prevState) => prevState - 1);
		}
	};

	// Automatically slide to new slide
	useEffect(() => {
		const timer = setInterval(() => {
			nextSlideHandler();
		}, 5000);

		// Cleanup function
		return () => {
			clearTimeout(timer);
		};
	}, [nextSlideHandler]);

	// Create Slide-component for each slide
	const slides = SLIDES.map((slide) => {
		return <Slide key={slide.id} id={slide.id} text={slide.text} subText={slide.subText} />;
	});

	return (
		<div className={classes.banner}>
			<div className={classes['banner-inner']}>
				<img
					className={classes['banner-inner_arrow']}
					src={leftArrow}
					alt="Copyright by https://tablericons.com/"
					onClick={prevSlideHandler}
				/>
				<div
					id="top-banner"
					style={{ transform: `translateX(${-100 * currentSlide}%)` }}
					className={classes['banner-inner_texts']}
				>
					{slides}
				</div>
				<img
					className={classes['banner-inner_arrow']}
					src={rightArrow}
					alt="Copyright by https://tablericons.com/"
					onClick={nextSlideHandler}
				/>
			</div>
		</div>
	);
};

export default Banner;
