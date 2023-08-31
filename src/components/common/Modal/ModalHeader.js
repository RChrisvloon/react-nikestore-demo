// Asset imports
import classes from './ModalHeader.module.css';
import cross from '../../../assets/cross.svg';

const ModalHeader = (props) => {
	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<h2 className={classes.text}>{props.text}</h2>
				<img
					className={classes.closeBtn}
					onClick={props.onClick}
					src={cross}
					alt="Copyright by https://tablericons.com/"
				/>
			</div>
		</div>
	);
};

export default ModalHeader;
