import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

// Dark background effect if modal is opened
const Backdrop = (props) => {
	return (
		<div
			className={classes.backdrop}
			onClick={props.onClose}
		/>
	);
};

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

// Select element to insert Modal & backdrop into html-tree
const portalElement = document.getElementById('overlays');

const Modal = (props) => {
	return (
    // Insert Backdrop & Modal in html-tree (see index.html)
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</Fragment>
	);
};

export default Modal;
