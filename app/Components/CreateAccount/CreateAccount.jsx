import React from 'react';
import { Field, reduxForm } from 'redux-form';
import history from '../../history';

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

class CreateAccount extends React.Component {
    componentDidMount() {
        document.addEventListener('keydown', this.escFunction, false);
    }

    // escFunction(event) {
    //     if (event.keyCode === 32) {
    //         event.preventDefault();
    //     }
    // }

    render() {
        const { handleSubmit } = this.props;
        const handleSubmitForm = (values) => {
             
            const { email } = values;
            const qualifiedGovId = ['.gov', '.mil', '.state', '.edu'];
            let getDomain = email.substring(email.lastIndexOf('.'));
            getDomain = getDomain.toLowerCase();
            if (qualifiedGovId.includes(getDomain)) {
                history.push('/gov');
            } else {
                history.push('/com');
            }
        };
        return (
            <div className="containInnerWrap">
                <h1 className="title_h1">
            Create a new Overstock Professional Account
                </h1>
                <div className="loginBoxWrap">
                    <div className="loginBox">
                        <form onSubmit={handleSubmit(handleSubmitForm)}>
                            <Field
                                name="email"
                                component={renderField}
                                label="Email"
                                placeholder="Email" />
                            <Field
                                name="password"
                                type="password"
                                component={renderField}
                                label="Password"
                                placeholder="Password" />
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btnSignIn">
                            Create Account

                                </button>
                            </div>
                            <div className="form-group">
                                <div className="forgotTxt">
Already a member of Overstock Professional?
                                    <a
                                        onClick={() => history.push('/login')}>
                                 Sign In
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const CreateAccountPage = reduxForm({
    form: 'CreateAccount',
    validate,
})(CreateAccount);

export default CreateAccountPage;
