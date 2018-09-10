import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import HeaderComponent from './HeaderComponent';

describe('Test case  for <HeaderComponent />', () => {
    const wrapper = mount(<HeaderComponent />);

    it('should load the HeaderComponent component', () => {
        expect(wrapper).to.exist;
        expect(wrapper).to.have.length(1);
    });

    it('should load the HeaderComponent has Logo', () => {
        const Logo = wrapper.find('img');
        expect(Logo).to.exist;
        // expect(wrapper).to.have.length(1);
    });

    it('should load the HeaderComponent a click', () => {
        const LogoLink = wrapper.find('a');
        LogoLink.simulate('click');
        // expect(wrapper).to.have.length(1);
    });
});
