// React (Redux) imports
import { useState } from 'react';

// Asset imports
import classes from './FilterOptionSection.module.css';
import downArrow from '../../../assets/down-arrow.svg';

// Parent-element for all FilterOption-components
const FilterOptionSection = (props) => {
  const [showCategory, setShowCategory] = useState(true);

  const toggleShowCategory = () => {
    setShowCategory((prevState) => !prevState);
  }

	return (
		<div className={classes['filter-section']}>
			<div className={classes['filter-section-title_wrapper']}>
				<h3 className={classes['filter-section-title']}>{props.title}</h3>
				<img className={!showCategory ? classes['filter-section_collapsed'] : ''} src={downArrow} alt="Copyright by https://tablericons.com/" onClick={toggleShowCategory}/>
			</div>
      <div className={[classes['filter-section-options'], !showCategory ? classes['filter-section-options_hidden'] : ''].join(' ')}>{props.children}</div>
		</div>
	);
};

export default FilterOptionSection;
