import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ForgotPassword, { validate, renderField } from './ForgotPassword';


describe('Test suits for <ForgotPassword />', () => {
    let component;
    const submitCase = sinon.spy();
    let wrapperCreateAcct;
    beforeEach(() => {
        const mockStore = configureStore([]);
        const store = mockStore({
            context: { deviceType: { isDesktop: false } },
        });
        const handleSubmit = sinon.spy();
        wrapperCreateAcct = shallow(<ForgotPassword
            handleSubmit={handleSubmit}
            submitCase={submitCase}/>);
        component = mount(
            <Provider store={store}>
                <ForgotPassword submitCase={handleSubmit}/>
            </Provider>,
        );
    });
    it('should render the component items properly', () => {
        component = shallow(<ForgotPassword handleSubmit={() => {}} />);
        expect(component.contains('Enter a new password')).to.exist;
    });
    it('renders an error message for the input', () => {
        const input = { name: 'email' };
        const label = 'Email';
        const meta = { touched: true, error: 'Required' };
        const type = 'email';
        const placeholder = 'Email';
        const element = renderField({
            placeholder, label, type, input, meta,
        });
        shallow(element);
    });

    // Ensuring whether Sign In button is available

    it('should render the component items properly', () => {
        component = shallow(<ForgotPassword handleSubmit={() => {}} />);
        expect(component.contains(' Done ')).to.exist;
    });


    // Checking whether form-group,loginBoxWrap class has been defined

    it('should render the component elements properly', () => {
        component = shallow(<ForgotPassword handleSubmit={() => { }} />);
        expect(component.contains('form-group')).to.exist;
    });

    it('should render the component elements properly', () => {
        component = shallow(<ForgotPassword handleSubmit={() => { }} />);
        expect(component.contains('loginBoxWrap')).to.exist;
    });


    it('inValid Password1', () => {
        const aptError = validate({ password: '' });
        expect(aptError.password).to.equal('Required');
    });


    it('inValid Password2', () => {
        const aptError = validate({ password: '1234567' });
        expect(aptError.password).to.equal('Password should be greater than 8');
    });

    it('inValid Password3', () => {
        const aptError = validate({ confirmPassword: '1234567890123456' });
        expect(aptError.confirmPassword).to.equal('Password should be lesser than 16');
    });
    it('inValid Password3a', () => {
        const aptError = validate({ password: '1234567890123456' });
        expect(aptError.password).to.equal('Password should be lesser than 16');
    });

    it('inValid Password4', () => {
        const aptError = validate({ confirmPassword: '1234567' });
        expect(aptError.confirmPassword).to.equal('Password should be greater than 8');
    });

    it('inValid Password5', () => {
        const aptError = validate({ confirmPassword: '123456789012345' });
        expect(aptError.confirmPassword).to.equal('Please provide correct password');
    });
});
