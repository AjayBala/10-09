import React, { Component, Fragment } from 'react';
import {
    ControlLabel, FormGroup, FormControl, Button,
} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import FloatingLabel, {
    floatingStyles,
    focusStyles,
    inputStyles,
    labelStyles
  } from 'floating-label-react';

import '../Signup/Signup.scss';
import history from '../../history';




const inputStyle = {
    floating: {
      ...floatingStyles,
      border: '0px',
      fontSize: '12px',
      padding: '0px 5px',
    },
    focus: {
      ...focusStyles,
      padding: '16px 10px 5px 10px',
      borderColor: '#4A90E2',
      
    },
    input: {
      ...inputStyles,
      width: '100%',
      fontSize: '16px',
      padding: '16px 10px 5px 10px',
      backgroundColor: 'transparent',
      border: '1px solid #DADCDF',
      borderBottomColor: '#DADCDF',
      borderRadius: '4px',
      backgroundColor: '#F9FAFB',
      borderColor: '#DADCDF',
    },
    label: {
      ...labelStyles,
      width: '100%',
      height: '44px',
      paddingTop: '0px',
      marginBottom:'0px',      
    },
    span:{
        fontSize: '16px',
        color: '#939393',
        padding: '10px',
    }
  }


export const validate = (values) => {
    const error = {};
    /* eslint max-len: ["error", { "ignoreRegExpLiterals": true }] */
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailPasswordPattern = /^[a-zA-Z0-9]{8,16}$/g;
    const validEmail = emailPattern.test(values.email);
    // eslint-disable-next-line
    const validPwd = emailPasswordPattern.test(values.password);

    if (!values.email) {
        error.email = 'Please enter email';
    } else if (!validEmail) {
        error.email = 'Please enter a valid email';
    }

    if (!values.password) {
        error.password = 'Please enter password';
    } else if (values.password.length < 8) {
        error.password = 'Please enter a valid password';
    } else if (values.password.length > 15) {
        error.password = 'Please enter a valid password';
    }
    return error;
};

/* eslint-disable react/prop-types */
export const renderField = ({
    label, type, input,
    meta: { touched, error },
}) => (
    <Fragment>
        <FormGroup>
            <FloatingLabel
                {...input}
                placeholder={label}
                autoComplete="off"
                styles={inputStyle}
                type={type} />
            {touched && (error && (
                <span className="error_text">
                    {error}
                </span>))}
        </FormGroup>
    </Fragment>);

class SignupForm extends Component {
    componentDidMount() {
        // document.addEventListener('keydown', this.escFunction, false);
    }

    render() {
        const { handleSubmit } = this.props;

        const handlePagesOnSubmit = (values) => {
            console.log('values', values);
            history.push('/home');
        };

        return (

            <div className="formWrap">

                <form onSubmit={handleSubmit(handlePagesOnSubmit)}>

                    <Field
                        name="email"
                        type="text"
                        component={renderField}
                        label="Email" />
                    <Field
                        name="password"
                        type="password"
                        component={renderField}
                        label="Create Password"/>
                    <div>
                        secure your Oprofessional account with
                        two-step authentication
                    </div>
                    <div className="form-group customRadioBtn">
                        <ControlLabel>
                            <input type="checkbox" />
                            Verify my account with two-step authentication
                        </ControlLabel>
                    </div>

                    <div className="form-group formRowWrap">
                        <Button
                            type="submit"
                            className="btnBlueStyle createAccBtn">
                        Sign In
                        </Button>
                    </div>
                    
                </form>

            </div>
        );
    }
}

export default reduxForm({
    form: 'SignupForm',
    validate,
})(SignupForm);
