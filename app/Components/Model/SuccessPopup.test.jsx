import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ModalPopup from './SuccessPopup';

describe('<ModalPopup />', () => {
    let ModalPopupWrapper;
    const closeModel = sinon.spy();
    beforeEach(() => {
        ModalPopupWrapper = mount(<ModalPopup show successignup={1} bodycontent="You have successfully created your Overstock Professional account." onHide={closeModel} footerContent/>);
    });
    it('Should render the component', () => {
        expect(ModalPopupWrapper).to.exist;
    });
});
