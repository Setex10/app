import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = () => {
	return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={''}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById('modal')

const Modal = (props) => {
	return <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>
            {props.children}
        </ModalOverlay>, portalElement)}
    </Fragment>
};

export default Modal;