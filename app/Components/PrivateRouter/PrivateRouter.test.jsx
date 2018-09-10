import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router';
import { expect } from 'chai';
import PrivateRoute from './PrivateRouter';

describe('PrivateRouter', () => {
    let element;

    beforeEach(() => {
      element = <PrivateRoute />;
    });

    it('renders as expected', () => {
        const component = shallow(element);
        expect(component).to.exist;
    });
    
});
