import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import ForgotPasswordEmailTemplate from './ForgotPasswordEmailTemplate';

configure({ adapter: new Adapter() });

describe('ForgotPasswordEmailTemplate', () => {
    it('should render the component items properly', () => {
        const component = shallow(<ForgotPasswordEmailTemplate />);
        expect(component.contains('Hit the button below to reset your password')).to.exist;
    });

    // Ensuring whether Sign In button is available

    it('should render the component items properly', () => {
        const component = shallow(<ForgotPasswordEmailTemplate />);
        expect(component.contains('Reset Password')).to.exist;
    });

    it('should render the component elements properly', () => {
        const component = shallow(<ForgotPasswordEmailTemplate />);
        expect(component.contains('loginBoxWrap')).to.exist;
    });
    it('should simulate the onclick function properly for history.push', () => {
        const wrapper = shallow(<ForgotPasswordEmailTemplate />);
        wrapper.find('Button').at(1).simulate('click');
    });
    it('should simulate the onclick function properly for history.push', () => {
        const wrapper = shallow(<ForgotPasswordEmailTemplate />);
        wrapper.find('Button').at(0).simulate('click');
    });
});
