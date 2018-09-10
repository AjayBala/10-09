
import React from 'react';
// import { Field, reduxForm } from 'redux-form';
import './LoginOtpVerify.scss';
import {
    Row, Col, ControlLabel,
} from 'react-bootstrap';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import {
    Field, reduxForm, formValueSelector,
} from 'redux-form';
import history from '../../../history';

export const normalizeZip = (value) => {
    if (!value) {
        return value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');
    return onlyNums;
};

export const phoneChange = (length, event) => {
    const elemtName = event.target.name;
    const value = event.target.value.toString();
    const valueLength = value.length;
    if (valueLength >= length) {
        if (elemtName === 'comPhoneText1') {
            document.getElementsByName('comPhoneText2')[0].focus();
        } else if (elemtName === 'comPhoneText2') {
            document.getElementsByName('comPhoneText3')[0].focus();
        } else if (elemtName === 'comPhoneText3') {
            document.getElementsByName('comPhoneText4')[0].focus();
        } else if (elemtName === 'comPhoneText4') {
            document.getElementsByName('comPhoneText5')[0].focus();
        } else if (elemtName === 'comPhoneText5') {
            document.getElementsByName('comPhoneText6')[0].focus();
        }
    }
    console.log('valueLength###$', valueLength);
    if (valueLength === 0) {
        if (elemtName === 'comPhoneText6') {
            document.getElementsByName('comPhoneText5')[0].focus();
        } else if (elemtName === 'comPhoneText5') {
            document.getElementsByName('comPhoneText4')[0].focus();
        } else if (elemtName === 'comPhoneText4') {
            document.getElementsByName('comPhoneText3')[0].focus();
        } else if (elemtName === 'comPhoneText3') {
            document.getElementsByName('comPhoneText2')[0].focus();
        } else if (elemtName === 'comPhoneText2') {
            document.getElementsByName('comPhoneText1')[0].focus();
        }
    }
};

export const customPhoneField = ({
    maxLength, placeholder, input, type, meta: { touched, error },
}) => (
    <div className="form-group">
        <input
            {...input}
            maxLength={maxLength}
            placeholder={placeholder}
            type={type}
            className="form-control SqaureText new"
            onKeyUp={phoneChange.bind(this, maxLength)} />
        {touched && ((error && (<span className="errorPhnTxt">{error}</span>)))}
    </div>
);
/* eslint-disable react/prop-types */
export class LoginOtpVerify extends React.Component {
    constructor() {
        super();
        this.state = {
            // recaptchaVerified: false,
        };
    }

    handleChange = (event) => {
        const { emailId, password } = this.props;
        if (event.target.checked) {
            Cookies.set('LoginUser', { email: emailId, password });
        } else {
            Cookies.remove('LoginUser');
        }
        console.log('getCookie', Cookies.get('LoginUser'));
    };

    render() {
        const { handleSubmit } = this.props;
        const handleSubmitForm = (values) => {
            console.log('values', values);
            history.push('./home');
        };
        return (
            <div className="formWrap">
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <Row>
                        <Col sm={12} lg={12}>
                               Enter the confirmation code that was sent to your phone at
                               (***) ****- 1254
                        </Col >
                        <Col className="rememberDevice" sm={12} lg={12}>
                            <ControlLabel>
                                <input
                                    type="checkbox"
                                    onChange={this.handleChange}/>
Remember this device (not recommended for public or shared devices).
                            </ControlLabel>
                        </Col >
                    </Row>
                    <Row>
                        <Row className="phonenumber">
                            <Col
                                lg={2}
                                xs={2}
                                className="number">
                                <Field
                                    name="comPhoneText1"
                                    type="text"
                                    normalize={normalizeZip}
                                    style={{ width: '80px' }}
                                    maxLength="1"
                                    component={customPhoneField}/>

                            </Col>
                            <Col
                                lg={2}
                                xs={2}
                                className="number">
                                <Field
                                    name="comPhoneText2"
                                    type="text"
                                    normalize={normalizeZip}
                                    maxLength="1"
                                    component={customPhoneField}/>

                            </Col>
                            <Col
                                lg={2}
                                xs={2}
                                className="number">
                                <Field
                                    name="comPhoneText3"
                                    type="text"
                                    normalize={normalizeZip}
                                    maxLength="1"
                                    component={customPhoneField} />

                            </Col>
                            <Col
                                lg={2}
                                xs={2}
                                className="number">
                                <Field
                                    name="comPhoneText4"
                                    type="text"
                                    normalize={normalizeZip}
                                    maxLength="1"
                                    component={customPhoneField} />

                            </Col>
                            <Col
                                lg={2}
                                xs={2}
                                className="number">
                                <Field
                                    name="comPhoneText5"
                                    type="text"
                                    normalize={normalizeZip}
                                    maxLength="1"
                                    component={customPhoneField} />

                            </Col>
                            <Col
                                lg={2}
                                xs={2}
                                className="number">
                                <Field
                                    name="comPhoneText6"
                                    type="text"
                                    normalize={normalizeZip}
                                    maxLength="1"
                                    component={customPhoneField} />

                            </Col>
                        </Row>

                    </Row>

                    <Row>
                        <Col className="otpFirst" sm={12} lg={12}>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btnSignIn"
                                >
Confirm
                                </button>
                            </div>
                        </Col >
                        <Col sm={12} lg={12}>


If you did not receive a code, wait a few minutes and request a new one.


                        </Col >
                        <Col className="requestCode" sm={12} lg={12}>


                                  Request new code


                        </Col >
                    </Row>
                </form>
            </div>

        );
    }
}

const LoginOtpVerifyForm = reduxForm({
    form: 'login',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(LoginOtpVerify);

const selector = formValueSelector('login');
const mapStateToProps = state => ({
    emailId: selector(state, 'email'),
    password: selector(state, 'password'),
});

export default connect(mapStateToProps)(LoginOtpVerifyForm);
