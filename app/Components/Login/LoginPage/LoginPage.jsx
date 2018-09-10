import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { ControlLabel, Button } from 'react-bootstrap';
import history from '../../../history';
import './LoginPage.scss';
import floatingLabelField from '../../FloatingLabel/FloatingLabel';

export const validate = (values) => {
    const error = {};
    /* eslint max-len: ["error", { "ignoreRegExpLiterals": true }] */
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailPasswordPattern = /^[a-zA-Z0-9]{8,16}$/g;
    const validEmail = emailPattern.test(values.email);
    // eslint-disable-next-line
    const validPwd = emailPasswordPattern.test(values.password);

    if (!values.email) {
        error.email = 'Required';
    } else if (!validEmail) {
        error.email = 'Please Enter a Valid Email';
    }

    if (!values.password) {
        error.password = 'Required';
    } else if (values.password.length < 8) {
        error.password = 'Password should be greater than 8';
    } else if (values.password.length > 15) {
        error.password = 'Password should be lesser than 16';
    }
    return error;
};

/* eslint-disable react/prop-types */
export const renderField = ({
    placeholder, label, type, input,
    meta: { touched, error },
}) => (
    <div className="form-group">
        <label
            htmlFor={label}
            className="labelTxt_2">
            {label}
        </label>
        <input
            {...input}
            placeholder={placeholder}
            type={type}
            className="form-control" />
        {touched && (error && (
            <span className="errorTxt">
                {error}
            </span>
        ))}
    </div>);

export class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            // recaptchaVerified: false,
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.escFunction, false);
    }

    escFunction(event) {
        if (event.keyCode === 32) {
            event.preventDefault();
        }
    }

    render() {
        const { handleSubmit } = this.props;

        return (

            <div className="formWrap">
                <form onSubmit={handleSubmit}>
                    <Field
                        name="email"
                        component={floatingLabelField}
                        label="Email"
                        placeholder="Email" />
                    <Field
                        name="password"
                        type="password"
                        component={floatingLabelField}
                        label="Password"
                        placeholder="Password" />

                    <div className="form-group">
                        <p>secure your Oprofessional account with two-step authentication</p>
                        <ControlLabel>
                            <input type="checkbox" />
                            {' '}
                            Verify my account with two-step authentication
                        </ControlLabel>
                    </div>

                    <div className="form-group formRowWrap">
                        <Button
                            type="submit"
                            className="btnBlueStyle createAccBtn">
                         Sign In
                        </Button>

                        <Button
                            type="button"
                            className="btnSignIn"
                            onClick={() => history.push('/shop-yesno')}>
                            B2C To B2B Migration
                        </Button>
                    </div>


                </form>
            </div>


        );
    }
}

const LoginPageForm = reduxForm({
    form: 'login',
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(LoginPage);

const CookieUser = Cookies.get('LoginUser')
    ? JSON.parse(Cookies.get('LoginUser')) : {};
const mapStateToProps = state => ({
    stateValue: state,
    enableReinitialize: true,
    initialValues: {
        email: CookieUser.email || '',
        password: CookieUser.password || '',
    },
});
export default connect(mapStateToProps)(LoginPageForm);
