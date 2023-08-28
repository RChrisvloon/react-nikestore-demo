// Asset imports
import classes from './FormInput.module.css';

const FormInput = ({ label, type, id, name, value, onChange, icon }) => {
	return (
		<div className={classes['input_wrapper']}>
			<input key={id} type={type} id={id} name={name} value={value} required onChange={onChange} />
			<label htmlFor={id}>{label}</label>
			<img src={icon} alt={`${label} Icon`} />
		</div>
	);
};

export default FormInput;
