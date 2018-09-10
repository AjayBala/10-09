import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './password.scss';
import history from '../../history';
import {
    Button,
} from 'react-bootstrap';
import floatingLabelField from '../FloatingLabel/FloatingLabel';

export const validate = (values) => {
    const error = {};
    const emailPasswordPattern = /^[a-zA-Z0-9]{8,16}$/g;
    // eslint-disable-next-line
    const validPwd = emailPasswordPattern.test(values.password);

    if (!values.password) {
        error.password = 'Required';
    }

    if (!values.confirmPassword) {
        error.confirmPassword = 'Required';
    }

    if (values.password !== values.confirmPassword) {
        error.confirmPassword = 'Please provide matching password';
    }
    if (!values.password) {
        error.password = 'Required';
    } else if (values.password.length < 8) {
        error.password = 'Password should be greater than 8';
    } else if (values.password.length > 15) {
        error.password = 'Password should be lesser than 16';
    }
    if (!values.confirmPassword) {
        error.confirmPassword = 'Required';
    } else if (values.confirmPassword.length < 8) {
        error.confirmPassword = 'Password should be greater than 8';
    } else if (values.confirmPassword.length > 15) {
        error.confirmPassword = 'Password should be lesser than 16';
    }

    return error;
};


class ForgotPassword extends React.Component {
    componentDidMount() {
        // document.addEventListener('keydown', this.escFunction, false);
    }

    escFunction(event) {
        if (event.keyCode === 32) {
            event.preventDefault();
        }
    }

    render() {
        const { handleSubmit } = this.props;
        const handleSubmitForm = (values) => {
            console.info('FormValues', values);
            history.push('./');
        };
        return (
            <div className="containInnerWrap">
                <div className="loginBoxWrap">
                    <div className="loginBox">
                        <h1 className="title_h1 forgotTitle"> Create a new password </h1>

                        <form onSubmit={handleSubmit(handleSubmitForm)}>
                            <Field name="password" type="password" component={floatingLabelField} label="Create New Password" />
                            <Field name="confirmPassword" type="password" component={floatingLabelField} label="Confirm Password"/>
                            <div className="form-group formRowWrap">
                                <Button
                                    type="submit"
                                    className="btnBlueStyle createAccBtn">
                                Set New Password
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'forgotPassword',
    validate,
})(ForgotPassword);
