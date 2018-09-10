import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { Row, Col, ControlLabel } from 'react-bootstrap';
import './SmallBusiness.scss';
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

const SmallBusiness = (props) => {
    const { handleSubmit, submitting } = props;
    // const handleSubmitForm = (values) => {
    //     onNext(values);
    //   console.info('FormValues', values);
    // };
    return (
        <div className="formOutterWrap">
            <form onSubmit={handleSubmit} className="Com-form-style">
            <ul className="formListWrap">
                    <li>
                        <Field name="govName" type="text" label="Your Full Name*" component={floatingLabelField}  validate={required} />
                    </li>
                    <li>
                        <Field name="email" type="text" label="Email*" component={floatingLabelField}  validate={required} />
                    </li>
                    <li>
                        <Field name="govEmployee" type="number" label="Number of employees(optional)" component={floatingLabelField} />
                    </li>
                    <li>
                        <Field name="number" type="text" label="Phone Number*" component={floatingLabelField}  validate={required} />
                    </li>
                    <li>
                        <Field name="govBusinessName" type="text" label="Name of Business*" component={floatingLabelField}  validate={required} />
                    </li>
                    <li>
                        <Field name="comAddress" type="text" label="Street Address*" component={floatingLabelField}  validate={required} />
                    </li>
                    <li>
                        <Field name="govEin" type="text" label="EIN*" component={floatingLabelField}  validate={required} />
                    </li>
                    <li>
                        <Field name="comCity" type="text" label="City*" component={floatingLabelField}  validate={required} />
                    </li>
                    <li>
                        <div className="form-group">
                            <ControlLabel>
                                <input type="checkbox"/> I am a non-profit 501(c) organization
                            </ControlLabel>
                        </div>
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
                    
                </ul>

                
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

SmallBusiness.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
    form: 'Com', // a unique identifier for this form
    destroyOnUnmount: false,
    validate, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(SmallBusiness);
