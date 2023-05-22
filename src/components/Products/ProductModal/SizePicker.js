import React, { useState } from 'react';
import classes from './SizePicker.module.css';
import DUMMY_SIZES from '../../../store/DummySizes';

const SizePicker = (props) => {
  const [activeSize, setActiveSize] = useState(false);

  const onClickSize = (event) => {
    // Transform event.target.value to int
    const selectedSize = +event.target.value; 

    // Check if size if valid
    if (!selectedSize || selectedSize == null || selectedSize <= 0) {
      return;
    }

    // Set state value for styling in this prop
    setActiveSize(selectedSize);

    // Pass size to parentelement
    props.onSizeSelect(selectedSize);
  }

  // Return all possible shoe size-buttons
  const sizesContent = DUMMY_SIZES.map((item) => {
    return <button key={item} className={[classes['sizes_item'], activeSize === item ? classes['active'] : ''].join(' ')} onClick={onClickSize} value={item}>EU {item}</button>;
  });

	return (
		<div className={classes['wrapper']}>
			<div className={classes['sizes-info']}>
				<h3 className={classes['sizes-info_text']}>Select your size</h3>
				<h4 className={classes['sizes-info_subtext']}>Size Guide</h4>
			</div>
			<div className={classes['sizes']}>
				{sizesContent}
			</div>
		</div>
	);
};

export default SizePicker;
