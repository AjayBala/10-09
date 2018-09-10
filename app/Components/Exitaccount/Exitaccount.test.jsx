
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { expect } from 'chai';
import sinon from 'sinon';
import ModalPopup from '../Model/Model';
import Exitaccount, { validate, renderField } from './Exitaccount';

describe('Test suits for <Exitaccount />', () => {
    let wrapper;
    let wrapperComponent;
    const handleSubmit = sinon.spy();
    const submitCase = sinon.spy();
    const mockStore = configureStore([]);
    const store = mockStore({});
    const mockHistory = {
        push: sinon.spy(),
    };
    const closeModel = sinon.spy();

    beforeEach(() => {
        wrapper = shallow(<Exitaccount handleSubmit={handleSubmit} submitCase={submitCase} history={mockHistory} show successignup={1} bodycontent="You have successfully created your Overstock Professional account." onHide={closeModel}/>);
        wrapperComponent = mount(
            <Provider store={store}>
                <Exitaccount submitCase={handleSubmit}/>
            </Provider>,
        );
    });

    it('Check if the Exitaccount component exist', () => {
        expect(wrapper).to.exist;
    });

    it('Validate the email with valid input', () => {
        const validEmail = validate({ email: 'test@gmail.com' });
        expect(validEmail.email).to.be.equal(undefined);
    });

    it('Validate the email field with empty value', () => {
        const validEmail = validate({ email: '' });
        expect(validEmail.email).to.be.equal('Required');
    });

    it('Validate the email field with invalid value', () => {
        const validEmail = validate({ email: 'test@gmail' });
        expect(validEmail.email).to.be.equal('Please Enter a Valid Email');
    });

    it('Validate the password field with empty value', () => {
        const validEmail = validate({ password: '' });
        expect(validEmail.password).to.be.equal('Required');
    });

    it('Validate the password field with valid value', () => {
        const validEmail = validate({ password: 'test@12345' });
        expect(validEmail.password).to.be.equal(undefined);
    });

    it('Enable the button to create account and migration popup', () => {
        wrapperComponent.find('input').at(2).simulate('change');
    });

    it('Submit the form', () => {
        wrapperComponent.find('form').at(0).props().onSubmit();
    });

    it('Redirect to create account page', () => {
        wrapperComponent.find('input').at(2).simulate('change');
        const anchorDiv = wrapperComponent.find('a');
        anchorDiv.find('.crteBtn').at(0).simulate('click');
    });

    it('Redirect to login page', () => {
        const anchorDiv = wrapperComponent.find('a');
        console.log(anchorDiv.length, 'test');
        wrapperComponent.find('a').at(2).simulate('click');
    });

    it('Close modal popup', () => {
        wrapperComponent.find(ModalPopup).at(0).props().onHide();
    });

    it('renders an error message for the input', () => {
        const input = { name: 'govName', value: 'name' };
        const label = 'Your Full Name*';
        const meta = { touched: true, error: 'Required' };
        const type = 'text';
        const placeholder = 'govName';
        const element = renderField({
            placeholder, input, label, type, meta,
        });
        shallow(element);
    });
});
