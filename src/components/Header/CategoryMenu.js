import classes from './CategoryMenu.module.css';

// Default categories
const MENU_BUTTONS = [
	{
		name: 'New & Featured',
	},
	{
		name: 'Men',
	},
	{
		name: 'Women',
	},
	{
		name: 'Kids',
	},
	{
		name: 'Accessoires',
	},
	{
		name: 'Sale',
	},
];

// Return li-element for each category
const menuButtons = MENU_BUTTONS.map((menuButton) => {
	return (
		<li>
			<button>{menuButton.name}</button>
		</li>
	);
});

const CategoryMenu = (props) => {
	return <ul className={classes.categoryMenu}>{menuButtons}</ul>;
};

export default CategoryMenu;
