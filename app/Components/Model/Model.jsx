import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Model.scss';
import history from '../../history';
import { personalAccountText } from '../../../Utils/Utils';

const ModalPopup = (props) => {
    const { onHide } = props;
    return (
        <Modal {...props} className="customPopupWrap" >
            <Modal.Header className="modal-header-styles">
                <Modal.Title id="contained-modal-title-sm">
Use
                    {' '}
                    <strong>name@company.com</strong>
                    {' '}
for Overstock Professional
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body-styles">
                <h4><b>A business user account is not a personal account</b></h4>
                <p>
                    {personalAccountText}
                </p>
            </Modal.Body>
            <Modal.Footer className="modal-footer-styles">
                <Button className="modal-button-styles" onClick={onHide}>Cancel</Button>
                <Button className="modal-button-styles" onClick={() => history.push('/home')} >Confirm & Proceed</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalPopup;
