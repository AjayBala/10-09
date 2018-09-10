import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import './Quickverify.scss';
import floatingLabelField from '../../FloatingLabel/FloatingLabel';

export const validate = (values) => {
    const errors = {};
    if (Number(values.year) < 2019) {
        errors.year = 'Year should be at least 2019';
    } else if (Number(values.year) > 2030) {
        errors.year = 'Year should be below 2030';
    } else if (Number(values.month) < 0) {
        errors.month = 'Month should be between 1 to 12';
    } else if (Number(values.month) > 12) {
        errors.month = 'Month should be between 1 to 12';
    }

    return errors;
};

export const normalizeCard = (value, previousValue) => {
    if (!value) {
        return value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');
    if (!previousValue || value.length > previousValue.length) {
    // typing forward
        if (onlyNums.length === 4) {
            return `${onlyNums}-`;
        }
        if (onlyNums.length === 8) {
            return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4)}-`;
        }
        if (onlyNums.length === 12) {
            return `${onlyNums.slice(0, 8)}-${onlyNums.slice(8)}-`;
        }
    }
    if (onlyNums.length <= 4) {
        return onlyNums;
    }
    if (onlyNums.length <= 8) {
        return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4)}`;
    }
    if (onlyNums.length <= 12) {
        return `${onlyNums.slice(0, 8)}-${onlyNums.slice(8)}`;
    }
    return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4, 8)}-${onlyNums.slice(8, 12)}-${onlyNums.slice(12, 16)}`;
};


export const renderField = ({
    placeholder, input, label, type, meta: { touched, error },
}) => (
    <div className="form-group">
        <label htmlFor={label} className="labelTxt">{label}</label>
        <input {...input} placeholder={placeholder} type={type} className="form-control SqaureText" />
        {touched && ((error && <span className="errorTxt">{error}</span>))}
    </div>
);

export const normalizeZip = (value) => {
    if (!value) {
        return value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');
    return onlyNums;
};


class QuickVerify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property: props,
            isFocused: false,
        };
    }

    changeButton = () => {
        this.setState({
            isFocused: true,
        });
    };

    render() {
        const { property, isFocused } = this.state;
        const { handleSubmit, submitting, previousPage } = property;
        return (
            <div className="MidContentWrap">
                <div className="">
                    <h1> Get Verified Quicker (Optional) </h1>
                    <p> Business Credit Card </p>
                    <p>
If you have one,it helps us verify your account even faster.
                        <b> Your card will not be charged.</b>
                    </p>
                </div>

                <div className="formOutterWrap">
                    <form onSubmit={handleSubmit} className="form-style" onFocus={this.changeButton}>
                        <Field name="name" type="text" label="Name on Card" component={floatingLabelField}  />
                        <Field name="number" type="number" label="Card Number" component={floatingLabelField}  normalize={normalizeCard} />
                        <Row>
                            <Col lg={4} sm={4} className="expmonth" >
                                <Field name="month" type="number" label="MM" component={floatingLabelField}  normalize={normalizeCard} />
                            </Col>
                            <Col lg={4} sm={4} >
                                <Field name="year" type="number" component={floatingLabelField} label="YYYY" />
                            </Col>
                            <Col lg={4} sm={4}>
                                <Field name="cvnumber" type="password" component={floatingLabelField} label="CVV" />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} sm={12} className="" >
                                <Field name="checkbox" type="checkbox" component="input" className="checkmark"/>
                                <span className="chkwordings"> Use address from business information</span>
                            </Col>
                        </Row>
                        <Field name="address" type="text" component={floatingLabelField} label="Street Address" />
                        <Row>
                            <Col lg={5} sm={5}>
                                <Field name="City" component={floatingLabelField} label="State" />
                            </Col>
                            <Col lg={3} sm={3}>
                                <Field name="State" type="text" component={floatingLabelField} label="City" />
                            </Col>
                            <Col lg={4} sm={4} className="zip">
                                <Field name="Zip" type="text" component={floatingLabelField} label="Zip" normalize={normalizeZip}/>
                            </Col>
                        </Row>
                        <div className="formBtnWrap">
                            <button className="formBtn" type="submit" onClick={previousPage} >Back</button>
                            <button className="formBtn" type="submit" disabled={submitting}>{isFocused ? 'Next' : 'Skip for Now'}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'Com',
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(QuickVerify);
