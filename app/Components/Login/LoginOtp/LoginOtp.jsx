import React from 'react';
import { reduxForm } from 'redux-form';
import './LoginOtp.scss';
import {
    Row, Col, ControlLabel,
} from 'react-bootstrap';

/* eslint-disable react/prop-types */
export class LoginOtp extends React.Component {
    constructor() {
        super();
        this.state = {
            // recaptchaVerified: false,
        };
    }


    render() {
        const { handleSubmit } = this.props;
        return (
          
                    <div className="formWrap">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Row>
                                    <Col className="otpFirst" sm={12} lg={12}>
                                To help us verify identity and protect your private information, a
                                confirmation code will be sent to your phone or email.
                                    </Col >
                                </Row>
                                <Row>
                                    <Col sm={12} lg={12}>
                                        <div>Send the code:</div>

                                    </Col>
                                    <Col sm={12} lg={12}>
                                        <div className="radio">
                                            <ControlLabel>
                                                <input type="radio" name="optradioParent" checked/>

To my phone via text message or voice call
                                                {' '}
                                                <div className="sendcode">send code to :</div>
                                                <div>(****)***-1254</div>
                                                <div>send code via</div>
                                                <div className="radio">
                                                    <ControlLabel>
                                                        <input type="radio" name="optradio" checked/>
Text message (message and data rates may apply)
                                                    </ControlLabel>

                                                </div>
                                                <div className="radio">
                                                    <ControlLabel>
                                                        <input type="radio" name="optradio"/>
Voice call
                                                    </ControlLabel>
                                                </div>
                                            </ControlLabel>

                                        </div>
                                        <div className="radio">
                                            <ControlLabel>
                                                <input type="radio" name="optradioParent"/>
To my email address at something@gmail.com
                                            </ControlLabel>
                                        </div>

                                    </Col>
                                </Row>
                            </div>

                            <Row>
                                <Col className="otpFirst" sm={12} lg={12}>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btnSignIn"
                                        >
Send confirmation Code
                                        </button>
                                    </div>
                                </Col >
                            </Row>
                        </form>
                    </div>
            
        );
    }
}
export default reduxForm({
    form: 'login',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(LoginOtp);
