import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

// Backdrop component that represents the background overlay of the modal
const Backdrop = (props) => {
	return (
		<div
			className={classes.backdrop}
			onClick={props.onClose}
		/>
	);
};

// ModalOverlay component that represents the content container of the modal
const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

// Find the element in the DOM to render the modal
const portalElement = document.getElementById('overlays');

// Modal component that renders the backdrop and modal overlay using React portals
const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</Fragment>
	);
};

export default Modal;
