import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
// import { sinon } from 'sinon';
import FooterDetail from './FooterDetail';

describe('<FooterDetail/>', () => {
    const wrapperRedComp = mount(<FooterDetail />);
    it('Check if the werapper component exist', () => {
        expect(wrapperRedComp).to.exist;
    });

    it('should render the component items properly', () => {
        expect(wrapperRedComp.contains('Save Time & Money')).to.exist;
    });

    it('should render the component items properly', () => {
        expect(wrapperRedComp.find('.mainContentWrap')).to.have.lengthOf(1);
    });

    it('checking FooterDetail scrool Events', () => {
        wrapperRedComp.instance().scrollToTop();
    });

    it('scrool designer funtion should be invoked', () => {
        wrapperRedComp.find('a').at(0).simulate('click');
    });

    it('scrool government funtion should be invoked', () => {
        wrapperRedComp.find('a').at(1).simulate('click');
    });

    it('scrool corporate funtion should be invoked', () => {
        wrapperRedComp.find('a').at(2).simulate('click');
    });

    it('scrool business funtion should be invoked', () => {
        wrapperRedComp.find('a').at(3).simulate('click');
    });

    it('checking FooterDetail call ComponentWillunmount', () => {
        wrapperRedComp.unmount();
    });
});
