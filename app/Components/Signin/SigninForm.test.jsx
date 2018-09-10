
// import React from 'react';
// import { Provider } from 'react-redux';
// import { mount, shallow } from 'enzyme';
// import { expect } from 'chai';
// import configureStore from 'redux-mock-store';
// import sinon from 'sinon';
// import SignupForm, {
//     validate, renderField,
// } from './SigninForm';

// describe('Test suits for <signupform />', () => {
//     let component;
//     let wrapperRedComp;
//     const handleSubmit = sinon.spy();
//     const onSubmitCall = sinon.spy();
//     beforeEach(() => {
//         const mockStore = configureStore([]);
//         const store = mockStore({
//             context: { deviceType: { isDesktop: false } },
//         });
//         wrapperRedComp = shallow(<SignupForm
//             handleSubmit={handleSubmit}
//             onSubmitCall={onSubmitCall}
//         />);
//         component = mount(
//             <Provider store={store}>
//                 <SignupForm
//                     onSubmitCall={onSubmitCall}/>
//             </Provider>,
//         );
//     });
//     afterEach(() => {
//         component.unmount();
//     });
//     it('Check if the werapper component exist', () => {
//         expect(wrapperRedComp).to.exist;
//     });
//     it('renders an error message for the input', () => {
//         const input = { name: 'email' };
//         const label = 'Email';
//         const meta = { touched: true, error: 'Required' };
//         const type = 'email';
//         const element = renderField({
//             label, type, input, meta,
//         });
//         mount(element);
//     });

//     it('inValid Email', () => {
//         const aptError = validate({ email: '' });
//         expect(aptError.email).to.equal('Required');
//     });

//     it('inValid Password', () => {
//         const aptError = validate({ password: '' });
//         expect(aptError.password).to.equal('Required');
//     });

//     it('inValid Email', () => {
//         const aptError = validate({ email: 'Overstock@' });
//         expect(aptError.email).to.equal('Please Enter a Valid Email');
//     });

//     it('Valid Email', () => {
//         const aptError = validate({ email: 'Overstock@gmail.com' });
//         expect(aptError.email).to.equal(undefined);
//     });

//     it('inValid password', () => {
//         const aptError = validate({ password: 'Over' });
//         expect(aptError.password).to.equal('Password should be greater than 8');
//     });
//     it('inValid password', () => {
//         const aptError = validate({ password: 'OverkafugjkfgakjfbkfW' });
//         expect(aptError.password).to.equal('Password should be lesser than 16');
//     });

//     it('Valid password', () => {
//         const aptError = validate({ password: 'Overstock18' });
//         expect(aptError.password).to.equal(undefined);
//     });

//     it('should simulate the onclick function properly for history.push', () => {
//         const clickSignIn = component.find('.signInTxt');
//         clickSignIn.find('a').at(0).simulate('click');
//     });

//     it('should navigate to government domain', () => {
//         console.log(component, 'VVVVVVVVVVVVVVVVVV');
//         const formWrapper = component.find('form').at('0');
//         formWrapper.props().onSubmit();
//     });
// });
