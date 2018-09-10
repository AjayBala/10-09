import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import success from '../../../assets/Images/success_modal.png';
import './SuccessPopup.scss';

const ModalPopup = (props) => {
    const {
        footerContent, bodycontent, onHide, successignup, resetpassword,
    } = props;
    return (
        <Modal {...props}>
            {bodycontent && (
                <Modal.Body className="popUpBodyStyles">
                    {successignup && (
                        <div className="successTextStyles successBox">
                            <img className="successImgStyle" src={success} alt="success"/>
                            <div className="temp">{bodycontent}</div>
                        </div>
                    )}
                    {resetpassword && (
                        <div className="successTextStyles passwordBox">
                            <div className="temp">{bodycontent}</div>
                        </div>
                    )}
                </Modal.Body>
            )}
            {footerContent && (
                <Modal.Footer>
                    <Button onClick={onHide}>Cancel</Button>
                    <Button>Confirm & Proceed</Button>
                </Modal.Footer>
            ) }
        </Modal>
    );
};

export default ModalPopup;
