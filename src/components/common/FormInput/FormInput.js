// Asset imports
import React from 'react';
import classes from './FormInput.module.css';

const FormInput = React.forwardRef((props, ref) => {
	return (
		<div className={classes['input_wrapper']}>
			<input
				ref={ref}
				key={props.id}
				type={props.type}
				id={props.id}
				name={props.name}
				defaultValue={props.defaultValue}
				required
				onChange={props.onChange}
				disabled={props.disabled ? true : false}
				placeholder=""
			/>
			<label htmlFor={props.id}>{props.label}</label>
			<img src={props.icon} alt={`${props.label} Icon`} />
		</div>
	);
});

export default FormInput;
