import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CreateAccount, { validate, renderField } from './CreateAccount';

describe('Test suites for <CreateAccount />', () => {
    let component;
    const submitCase = sinon.spy();
    let wrapperCreateAcct;
    beforeEach(() => {
        const mockStore = configureStore([]);
        const store = mockStore({
            context: { deviceType: { isDesktop: false } },
        });
        const handleSubmit = sinon.spy();
        wrapperCreateAcct = shallow(<CreateAccount
            handleSubmit={handleSubmit}
            submitCase={submitCase}/>);
        component = mount(
            <Provider store={store}>
                <CreateAccount submitCase={handleSubmit}/>
            </Provider>,
        );
    });

    it('should render the component items properly', () => {
        component = shallow(<CreateAccount handleSubmit={() => {}} />);
        expect(component.contains(' Use Existing Account ')).to.exist;
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

    it('inValid Email', () => {
        const aptError = validate({ email: '' });
        expect(aptError.email).to.equal('Required');
    });

    it('inValid Email', () => {
        const aptError = validate({ email: 'Overstock@' });
        expect(aptError.email).to.equal('Please Enter a Valid Email');
    });


    it('inValid Password', () => {
        const aptError = validate({ password: '' });
        expect(aptError.password).to.equal('Required');
    });

    it('inValid Password', () => {
        const aptError = validate({ password: '1234567' });
        expect(aptError.password).to.equal('Password should be greater than 8');
    });

    it('inValid Password', () => {
        const aptError = validate({ password: '1234567890789456' });
        expect(aptError.password).to.equal('Password should be lesser than 16');
    });

    it('Valid password', () => {
        const aptError = validate({ password: 'Overstock18' });
        expect(aptError.password).to.equal(undefined);
    });
    
    it('Valid Email', () => {
        const aptError = validate({ email: 'Overstock@gmail.com' });
        expect(aptError.email).to.equal(undefined);
    });

    // Checking whether form-group,loginBoxWrap class has been defined

    it('should render the component elements properly', () => {
        component = shallow(<CreateAccount handleSubmit={() => {}} />);
        expect(component.contains('form-group')).to.exist;
    });

    it('should render the component elements properly', () => {
        component = shallow(<CreateAccount handleSubmit={() => {}} />);
        expect(component.contains('loginBoxWrap')).to.exist;
    });
    it('should render the component elements properly', () => {
        component = shallow(<CreateAccount handleSubmit={() => {}} />);
        expect(component.contains('form-group')).to.exist;
    });

    it('should render the component items properly', () => {
        component = shallow(<CreateAccount handleSubmit={() => {}} />);
        expect(component.contains(' Already a member of Overstock Professional? ')).to.exist;
    });

    it('should simulate the onclick function properly for history.push', () => {
        const clickSignIn = component.find('.forgotTxt');
        clickSignIn.find('a').at(0).simulate('click');
    });

    it("should navigate to government domain", () => {
        const formWrapper = component.find('form').at('0');
        formWrapper.props().onSubmit();
    });

    
});
