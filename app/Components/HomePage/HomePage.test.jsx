import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import HomePage from './HomePage';

describe('Test suits for <HomePage />', () => {
    const shallowWrapper = shallow(<HomePage />);

    it('Check if the werapper component exist', () => {
        expect(shallowWrapper).to.exist;
    });

    it('clicking on close Model', () => {
        shallowWrapper.instance().closeModel();
    });

    it('clicking on close Model', () => {
        shallowWrapper.instance().closeModel();
    });
});
