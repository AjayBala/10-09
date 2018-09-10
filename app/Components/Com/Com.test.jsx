import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ComForm from './Com';

describe('Test suits for <ComForm />', () => {
    const shallowWrapper = shallow(<ComForm />);

    it('Check if the werapper component exist', () => {
        expect(shallowWrapper).to.exist;
    });

    it('Com page API called and UI should render', () => {
        const instance = shallowWrapper.instance();
        instance.nextPage();
        instance.previousPage();
        instance.onSubmit();
        instance.closeModel();
        instance.businessTypeChange();
    });

    it('Com page after render', () => {
        const instance = shallowWrapper.instance();
        instance.nextPage();
        instance.nextPage();
        shallowWrapper.setState({ currentStep: 2 });
    });
});
