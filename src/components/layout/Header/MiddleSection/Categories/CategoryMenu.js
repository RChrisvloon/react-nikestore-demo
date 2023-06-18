// React (Redux) imports
import { useState } from 'react';
import CATEGORY_BUTTONS from '../../../../../data/CategoryButtonsData';

// Component imports
import CategoryMenuContent from './CategoryMenuContent';

// Asset imports
import classes from './CategoryMenu.module.css';

// Section that shows possible categories of items (Men, Women, Accessoires etc.)
const CategoryMenu = (props) => {
	const [activeDropdown, setActiveDropdown] = useState(null);

	const handleMouseEnter = (index) => {
		setActiveDropdown(index);
	};

	const handleMouseLeave = () => {
		setActiveDropdown(null);
	};

	// Return li-element for each category
	const categoryButtons = CATEGORY_BUTTONS.map((categoryButton, index) => {
		const isDropdownActive = activeDropdown === index;

		return (
			<li
				key={categoryButton.name}
				className={`${classes.menuButton} ${isDropdownActive ? classes.open : ''}`}
				onMouseEnter={() => handleMouseEnter(index)}
				onMouseLeave={handleMouseLeave}
			>
				<button>{categoryButton.name}</button>
				{isDropdownActive && (
					<div className={classes.dropdownContent}>
						<CategoryMenuContent currentCategory={categoryButton} />
					</div>
				)}
			</li>
		);
	});

	return <ul className={classes.categoryMenu}>{categoryButtons}</ul>;
};

export default CategoryMenu;
