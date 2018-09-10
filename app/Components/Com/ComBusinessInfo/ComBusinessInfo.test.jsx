import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ComBusinessInfo from './ComBusinessInfo';

describe('Test suits for <ComBusinessInfo />', () => {
    const businessType = 'Corporation';
    const onBusinessTypeChange = sinon.spy();
    const shallowWrapper = shallow(<ComBusinessInfo
        businessType={businessType}
        onBusinessTypeChange={onBusinessTypeChange} />);

    it('Check if the werapper component exist', () => {
        expect(shallowWrapper).to.exist;
    });

    it('Pass Corporation funtion should be invoked', () => {
        shallowWrapper.find('input').at(0).simulate('click');
    });

    it('Pass Small Business funtion should be invoked', () => {
        shallowWrapper.find('input').at(1).simulate('click');
    });

    it('after render click ', () => {
        shallowWrapper.setProps({ businessType: 'Small Business' });
    });
});
