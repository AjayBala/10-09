import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TableInfo from './table';


describe('<FooterDetail/>', () => {
    it('should render the component items properly', () => {
        const component = shallow(<TableInfo />);
        expect(component.contains('Overstock')).to.exist;
    });
    it('should render the component items properly', () => {
        const wrapper = shallow(<TableInfo />);
        expect(wrapper.find('.tablewrap')).to.have.lengthOf(1);
    });
    it('should render the component items properly', () => {
        const wrapper = shallow(<TableInfo />);
        expect(wrapper.find('.tick')).to.have.lengthOf(2);
    });
});
