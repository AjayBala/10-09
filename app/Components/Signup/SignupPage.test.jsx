import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';
import SignupPage from './SignupPage';


describe('<SignupPage/>', () => {
    const location = { pathname: '/signup' };
    const component = shallow(<SignupPage location={location}/>);
    it('should render the component items properly', () => {
        expect(component.contains(' Discover the one-stop shop that works for you. ')).to.exist;
    });
    it('should render the component items properly', () => {
        expect(component.find('.bgStyle')).to.have.lengthOf(1);
    });
    it('should render the component items properly , to check bnrFormOutWrap has been used twice', () => {
        const wrapper = shallow(<SignupPage location={location}/>);
        expect(wrapper.find('.bnrFormOutWrap')).to.have.lengthOf(2);
    });
    it('Should render the shop-yesno component', () => {
        component.setProps({
            location: { pathname: '/shop-yesno' },
        });
    });
});
