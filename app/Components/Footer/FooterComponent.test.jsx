import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FooterComponent from './FooterComponent';


describe('<FooterDetail/>', () => {
    it('should render the component items properly', () => {
        const component = shallow(<FooterComponent />);
        expect(component.contains(' Frequently Asked Questions ')).to.exist;
    });
    it('should render the component items properly', () => {
        const wrapper = shallow(<FooterComponent />);
        expect(wrapper.find('#footerWrap')).to.have.lengthOf(1);
    });
    it('should render the component items properly , to check if v1 class is used twice', () => {
        const wrapper = shallow(<FooterComponent />);
        expect(wrapper.find('.vl')).to.have.lengthOf(2);
    });
});
