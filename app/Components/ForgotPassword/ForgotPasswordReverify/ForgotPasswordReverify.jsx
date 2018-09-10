import React from 'react';
import {
    ControlLabel, FormGroup, FormControl, Button,
} from 'react-bootstrap';
import history from '../../../history';
import '../password.scss';

const ForgotPasswordReverify = () => (
    <div className="containInnerWrap">
        <div className="loginBoxWrap">
            <div className="loginBox">
                <div>
                    <ControlLabel
                        className="labelTxt">
                    Go check your email. If we find an account associated with this email we send a password reset link.
                    </ControlLabel>
                </div>
                <div className="form-group formRowWrap">
                    <Button
                        type="button"
                        className="btnBlueStyle createAccBtn"
                        onClick={() => history.push('./email-template')}>
                         Send Another Reset Link
                    </Button>
                </div>
               
            </div>
        </div>
    </div>
);

export default ForgotPasswordReverify;
