// React (Redux) imports
import { Fragment } from 'react';

// Asset imports
import classes from './CategoryMenuContent.module.css';

const CategoryMenuContent = (props) => {
	// Generate category-dropdown content
	const categoryContent = props.currentCategory.content.map((group, groupIndex) => (
		// Create column for each subcategory (eg: men -> shoes)
		<div key={groupIndex} className={classes.categoryGroup}>
			<h2 className={classes.categoryGroup_title}>{group.group}</h2>
			<div className={classes.categoryGroup_rows}>
				{/* Create buttons for subcategory-items (eg: 'Jogging', 'Basketball' etc.) */}
				{group.rows.map(({ url, label }, rowIndex) => (
					<div key={rowIndex} className={classes.categoryGroup_row}>
						<a href={url}>{label}</a>
					</div>
				))}
			</div>
		</div>
	));

	return <Fragment>{categoryContent}</Fragment>;
};

export default CategoryMenuContent;
