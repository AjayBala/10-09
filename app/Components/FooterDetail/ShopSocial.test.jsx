import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ShopSocial from './ShopSocial';

describe('<FooterDetail/>', () => {
    it('should have an FooterDetail', () => {
        const wrapper = shallow(<ShopSocial/>);
        // expect(wrapper.find('mainContentWrap')).to.have.length(1);
        expect(wrapper.contains('MY ACCOUNT')).to.exist;
    });
    it('should have an FooterDetail', () => {
        const wrapper = shallow(<ShopSocial/>);
        // expect(wrapper.find('mainContentWrap')).to.have.length(1);
        expect(wrapper.contains('LET US HELP')).to.exist;
    });
    it('should have an FooterDetail', () => {
        const wrapper = shallow(<ShopSocial/>);
        // expect(wrapper.find('mainContentWrap')).to.have.length(1);
        expect(wrapper.contains('Media Room')).to.exist;
    });
});
