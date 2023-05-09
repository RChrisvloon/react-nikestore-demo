import React, { useState } from 'react';
import classes from './Banner.module.css';

// Import svg file(s)
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';
import Slide from './Slide';

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

	const nextSlideHandler = () => {
		// const amountOfSlides = document.getElementById('top-banner').children.length;

		if (currentSlide === SLIDES.length - 1) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide((prevState) => prevState + 1);
		}
	};

	const prevSlideHandler = () => {
		// const amountOfSlides = document.getElementById('top-banner').children.length;

		if (currentSlide === 0) {
			setCurrentSlide(SLIDES.length - 1);
		} else {
			setCurrentSlide((prevState) => prevState - 1);
		}
	};

	// Create Slide-component for each slide
	const slides = SLIDES.map((slide) => {
		return <Slide key={slide.id} id= {slide.id} text={slide.text} subText={slide.subText} />;
	});

	return (
		<div className={classes.banner}>
			<div className={classes['banner-inner']}>
				<img
					className={classes['banner-inner_arrow']}
					src={leftArrow}
					alt="Left arrow"
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
					alt="Right arrow"
					onClick={nextSlideHandler}
				/>
			</div>
		</div>
	);
};

export default Banner;
