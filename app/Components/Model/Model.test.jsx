import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import ModalPopup from './Model';

describe('<ModalPopup />', () => {
    let ModalPopupWrapper;
    const mockHistory = {
        push: sinon.spy(),
    };
    beforeEach(() => {
        ModalPopupWrapper = shallow(<ModalPopup history={mockHistory}/>);
    });
    it('Should render the component', () => {
        expect(ModalPopupWrapper).to.exist;
    });
    it('Should trigger hide click method on cancel', () => {
        ModalPopupWrapper.find('Button').at(0).simulate('click');
    });
    it('Modal popup on confirmation', () => {
        ModalPopupWrapper.find('Button').at(1).simulate('click');
    });
});
