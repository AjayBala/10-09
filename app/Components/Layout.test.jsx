import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Layout from './Layout';

describe('Test suits for <Layout />', () => {
    const shallowWrapper = shallow(<Layout />);

    it('Check if the werapper component exist', () => {
        expect(shallowWrapper).to.exist;
    });
});
