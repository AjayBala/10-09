import React, { Component, Fragment } from 'react';
import {
    ControlLabel, FormGroup, FormControl, Button, Row, Col
} from 'react-bootstrap';
// import { render } from 'react-dom';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './Corporation.scss';
import floatingLabelField from '../../../FloatingLabel/FloatingLabel';



export const required = value => (value ? undefined : 'Required');

export const positiveValue = value => (
    value && value <= 0 ? 'Must be positive values' : undefined);

export const validate = (values) => {
    const error = {};
    /* eslint max-len: ["error", { "ignoreRegExpLiterals": true }] */
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validEmail = emailPattern.test(values.email);

    if (!values.email) {
        error.email = 'Required';
    } else if (!validEmail) {
        error.email = 'Please Enter a Valid Email';
    }
    return error;
};

export const renderField = ({
    placeholder, input, label, type, meta: { touched, error },
}) => (
    <div className="form-group">
        <ControlLabel className="labelTxt">{label}</ControlLabel>
        <input
            {...input}
            placeholder={placeholder}
            type={type}
            className="form-control SqaureText" />
        {touched && ((error && (<span className="errorTxt">{error}</span>)))}
    </div>
);


export const FieldFileInput = ({
    placeholder, input: { onChange }, label, type, meta: { touched, error },
}) => (
    <div>
        <ControlLabel>{label}</ControlLabel>
        <div className="file">
            <input
                type="file"
                id="file-input"
                accept=".jpg, .png, .jpeg, .pdf, .txt"
                onChange={e => onChange(e.target.files[0])} />
            <ControlLabel htmlFor="file-input">Upload</ControlLabel>
            {touched && ((error && (<span className="error_text">{error}</span>)))}
        </div>
        
    </div>
);

export const phoneChange = (length, event) => {
    const elemtName = event.target.name;
    const value = event.target.value.toString();
    const valueLength = value.length;
    if (valueLength >= length) {
        if (elemtName === 'comPhoneText1') {
            document.getElementsByName('comPhoneText2')[0].focus();
        } else if (elemtName === 'comPhoneText2') {
            document.getElementsByName('comPhoneText3')[0].focus();
        }
    }
    console.log('valueLength###$', valueLength);
    if (valueLength === 0) {
        if (elemtName === 'comPhoneText3') {
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
            className="form-control SqaureText"
            onKeyUp={phoneChange.bind(this, maxLength)} />
        {touched && ((error && (<span className="errorPhnTxt">{error}</span>)))}
    </div>
);

export const normalizeZip = (value) => {
    if (!value) {
        return value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');
    return onlyNums;
};


// export const onChange = (e) =>{
//     const re = /^[0-9\b]+$/;
//     if (e.target.value == '' || re.test(e.target.value)) {
//        this.setState({value: e.target.value})
//     }
//  }


const Corporation = (props) => {
    const {
        handleSubmit, submitting,
    } = props;

    return (
        <div className="formOutterWrap">
            <form onSubmit={handleSubmit} className="Com-form-style">
                <ul className="formListWrap">
                    <li>
                        <Field name="comName" type="text" label="Your Full Name*" component={floatingLabelField}  validate={required} />
                    </li>
                    <li>
                        <Field name="email" type="text" label="Email*" component={floatingLabelField}  validate={required} />
                    </li>
                    <li>
                        <Field name="comEmployee" type="number" label="Number of employees(optional)" component={floatingLabelField} />
                    </li>
                    <li>
                        <Field name="phoneNumber" type="number" label="Phone Number*" component={floatingLabelField}  validate={required} />
                    </li>
                    <li>
                        <Field name="comBusinessName" type="text" label="Name of Business*" component={floatingLabelField}  validate={required} />
                    </li>
                    <li>
                        <Field name="comAddress" type="text" label="Street Address*" component={floatingLabelField}  validate={required} />
                    </li>
                    <li>
                        <Field name="comCity" type="text" label="City*" component={floatingLabelField}  validate={required} />
                    </li>
                    <li>
                        <Row>
                            <Col lg={7} sm={7}>
                                <Field name="comState" type="text" label="State*" component={floatingLabelField}  validate={required} />
                            </Col>
                            <Col lg={5} sm={5}>
                                <Field name="comZip" type="number" label="Zip*" component={floatingLabelField}  validate={required} />
                            </Col>
                        </Row>
                    </li>
                    <li>
                        <div className="form-group">
                            <ControlLabel>
                                <input type="checkbox"/> I am a non-profit 501(c) organization
                            </ControlLabel>
                        </div>
                    </li>
                </ul>

                <div className="fileuploadwrap">
                <Row>
                    <Col lg={8} sm={12}>
                        <div className="fileupload">
                            <p >
Please upload any supporting documents.
 Please note verification of these documents can take up to 24 hours.
                                <br/>
                                {' '}
                                <br/>
                                {' '}
                                <b>Supported documents include:</b>
                                {' '}
Resale certificate, Business License,
Professional license or permit, State tax exemption, Membership document

                            </p>
                        </div>
                    </Col>
                    <Col lg={4} sm={12}>
                        <div className="fileuploadbuton">
                            <Field
                                name="uploadFile"
                                component={FieldFileInput}
                                validate={required}
                            />
                        </div>
                    </Col>
                </Row>
                </div>
                <div className="formBtnWrap">
                    <button
                        className="formBtn"
                        type="submit"
                        disabled={submitting}>
Next

                    </button>
                </div>
            </form>
        </div>
    );
};


Corporation.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
    form: 'Com', // a unique identifier for this form
    destroyOnUnmount: false,
    validate,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    enableReinitialize: true,
})(Corporation);
