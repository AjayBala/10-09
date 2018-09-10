import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ShopYesorNo from './ShopYesorNo';


describe('<ShopYesorNo/>', () => {
    it('should render the component items properly in ShopYesorNo', () => {
        const component = shallow(<ShopYesorNo />);
        expect(component.contains('Do you already Shop on Overstock using your work email?')).to.exist;
    });
    it('should render the component items properly', () => {
        const wrapper = shallow(<ShopYesorNo />);
        expect(wrapper.find('.formWrap')).to.have.lengthOf(1);
    });
    it('should render the component items properly', () => {
        const wrapper = shallow(<ShopYesorNo />);
        expect(wrapper.find('.NoButton')).to.have.lengthOf(1);
    });
    it('should render the component items properly', () => {
        const wrapper = shallow(<ShopYesorNo />);
        expect(wrapper.find('.YesButton')).to.have.lengthOf(1);
    });
    it('should simulate the onclick function properly for history.push', () => {
        const wrapper = shallow(<ShopYesorNo />);
        wrapper.find('Button').at(1).simulate('click');
    });
    it('should simulate the onclick function properly for history.push', () => {
        const wrapper = shallow(<ShopYesorNo />);
        wrapper.find('Button').at(0).simulate('click');
    });
});
