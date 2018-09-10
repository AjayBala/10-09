
import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import SignupFormConnected, {
    validate, SignupForm,
} from './SignupForm';

import floatingLabelField from '../FloatingLabel/FloatingLabel';

describe.only('Test suits for <signupform />', () => {
    let component;
    let wrapperRedComp;
    const handleSubmit = sinon.spy();
    const onSubmitCall = sinon.spy();
    const verifyCallback = sinon.spy();
    const checkDomain = sinon.spy();
    const handleChecked = sinon.spy();
    const handlePasswrdChange = sinon.spy();
    const defaultProps = {
        // preferences: preference,
        // newCaseInfo: { updateStatus: { type: 'Success' } },
        // openAddCaseNote: () => { },
        // getSourceText,
        // getDestinationText,
        // caseDetailsData: _clone(data),
        actions:
        {
            verifyCallback, checkDomain, handleChecked, handlePasswrdChange,
        },
    };
    const shallowWrapper = shallow(
        <SignupForm handleSubmit={() => {}} {...defaultProps} />,
    );
    const mockStore = configureStore([]);
    const store = mockStore({
        context: { deviceType: { isDesktop: false } },
    });
    // const verifyCallback = sinon.spy();
    beforeEach(() => {
        wrapperRedComp = shallow(<SignupForm
            handleSubmit={handleSubmit}
            submitCase={onSubmitCall}
            // verifyCallback={verifyCallback}
            // handleChecked={handleChecked}
            // handlePasswrdChange={handlePasswrdChange}
        />);
        component = mount(
            <Provider store={store}>
                <SignupFormConnected
                    submitCase={onSubmitCall} />
            </Provider>,
        );
    });
    afterEach(() => {
        component.unmount();
    });

    it('Check if the wrapper component exist', () => {
        expect(component).to.exist;
    });
    it('Check if the werapper component exist', () => {
        expect(wrapperRedComp).to.exist;
    });

    it('renders an error message for the input', () => {
        const input = { name: 'email' };
        const label = 'Email';
        const meta = { touched: true, error: 'Required' };
        const type = 'email';
        const element = floatingLabelField({
            label, type, input, meta,
        });
        mount(element);
    });

    it('inValid Email', () => {
        const aptError = validate({ email: '' });
        expect(aptError.email).to.equal('Required');
    });

    it('inValid Password', () => {
        const aptError = validate({ password: '' });
        expect(aptError.password).to.equal('Required');
    });

    it('inValid Email', () => {
        const aptError = validate({ email: 'Overstock@' });
        expect(aptError.email).to.equal('Please Enter a Valid Email');
    });

    it('Valid Email', () => {
        const aptError = validate({ email: 'Overstock@gmail.com' });
        expect(aptError.email).to.equal(undefined);
    });

    it('inValid password', () => {
        const aptError = validate({ password: 'Over' });
        expect(aptError.password).to.equal('Password should be greater than 8');
    });
    it('inValid password', () => {
        const aptError = validate({ password: 'OverkafugjkfgakjfbkfW' });
        expect(aptError.password).to.equal('Password should be lesser than 16');
    });
    it('inValid password-test', () => {
        const aptError = validate({ password: 'overstock!' });
        expect(aptError.password).to.equal('Need upper case');
    });
    it('inValid password-test', () => {
        const aptError = validate({ password: 'Overstock' });
        expect(aptError.password).to.equal('Need Atleast one special Character');
    });
    it('inValid password-test', () => {
        const aptError = validate({ password: 'Over!' });
        expect(aptError.password).to.equal('Password should be greater than 8');
    });
    it('funtion 1 should be invoked', () => {
        shallowWrapper.instance().verifyCallback();
    });
    it('funtion 2 should be invoked', () => {
        shallowWrapper.instance().checkDomain();
    });
    // it('funtion 3 should be invoked', () => {
    //     shallowWrapper.instance().handleChecked();
    // });
    // it('funtion 4 should be invoked', () => {
    //     shallowWrapper.instance().handlePasswrdChange();
    // });
    // it('Valid password', () => {
    //     const aptError = validate({ password: 'Overstock18' });
    //     expect(aptError.password).to.equal(undefined);
    // });

    it('should navigate to government domain', () => {
        const formWrapper = component.find('form').at('0');
        // console.log(component.instance(), 'CHCHCEHCEDHDFDG');
        formWrapper.props().onSubmit();
    });

    it('Value must be cleared and placeholder should be changed on selected the checkbox', () => {
        const value = { target: { checked: true } };
        const instance = wrapperRedComp.instance();
        instance.render();
        instance.handleChecked(value);
    });

    it('Component is unmounted', () => {
        component.unmount();
    });
});
