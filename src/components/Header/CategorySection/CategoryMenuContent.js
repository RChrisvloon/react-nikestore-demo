import { Fragment } from 'react';
import classes from './CategoryMenuContent.module.css';

const CategoryMenuContent = (props) => {
	const menuContent = props.currentCategory.content.map((group, groupIndex) => (
		<div key={groupIndex} className={classes.categoryGroup}>
			<h2 className={classes.categoryGroup_title}>{group.group}</h2>
			<div className={classes.categoryGroup_rows}>
				{group.rows.map(({ url, label }, rowIndex) => (
					<div key={rowIndex} className={classes.categoryGroup_row}>
						<a href={url}>{label}</a>
					</div>
				))}
			</div>
		</div>
	));

	return <Fragment>{menuContent}</Fragment>;
};

export default CategoryMenuContent;
