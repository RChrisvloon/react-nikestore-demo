import React, { useState } from 'react';
import classes from './FilterOptionSection.module.css';

// Import svg file(s)
import downArrow from '../../../assets/down-arrow.svg';

const FilterOptionSection = (props) => {
  const [showCategory, setShowCategory] = useState(true);

  const toggleShowCategory = () => {
    setShowCategory((prevState) => !prevState);
  }

	return (
		<div className={classes['filter-section']}>
			<div className={classes['filter-section-title_wrapper']}>
				<h3 className={classes['filter-section-title']}>{props.title}</h3>
				<img src={downArrow} alt="Toggle Icon" onClick={toggleShowCategory}/>
			</div>
      <div className={[classes['filter-section-options'], !showCategory ? classes['is-hidden'] : ''].join(' ')}>{props.children}</div>
		</div>
	);
};

export default FilterOptionSection;
