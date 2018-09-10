import React, { Fragment } from 'react';
import { FormGroup } from 'react-bootstrap';
import FloatingLabel, {
    floatingStyles,
    focusStyles,
    inputStyles,
    labelStyles,
} from 'floating-label-react';

import './FloatingLabel.scss';


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
        float: 'left',
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
        float: 'left',
        height: '44px',
        paddingTop: '0px',
        marginBottom: '0px',
    },
    span: {
        fontSize: '16px',
        color: '#939393',
        padding: '10px',
    },
};


const floatingLabelField = ({
    label, type, input, placeholder, id, autoFocus,
    meta: { touched, error },
}) => (
    <Fragment>
        <FormGroup controlId={id} className={touched && (error && ('errorBorder'))} >
            <FloatingLabel
                {...input}
                placeholder={placeholder || label}
                autoComplete="off"
                // value={value}
                autoFocus={autoFocus}
                styles={inputStyle}
                type={type} />
            {touched && (error && (
                <span className="error_text">
                    {error}
                </span>))}
        </FormGroup>
    </Fragment>);

export default floatingLabelField;
