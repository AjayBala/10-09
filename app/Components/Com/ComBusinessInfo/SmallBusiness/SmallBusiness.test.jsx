import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import SmallBusiness, {
    required, positiveValue,
    validate, phoneChange, normalizeZip, renderField, customPhoneField,
} from './SmallBusiness';
// minValue, maxValue,


describe('Test suits for <SmallBusiness />', () => {
    let component;
    const submitCase = sinon.spy();
    let wrapperRedComp;
    beforeEach(() => {
        const mockStore = configureStore([]);
        const store = mockStore({});
        const handleSubmit = sinon.spy();
        wrapperRedComp = shallow(<SmallBusiness
            handleSubmit={handleSubmit}
            submitCase={submitCase}/>);
        component = mount(
            <Provider store={store}>
                <SmallBusiness submitCase={handleSubmit}/>
            </Provider>,
        );
    });

    it('Check if the werapper component exist', () => {
        expect(wrapperRedComp).to.exist;
    });

    it('renders an error message for the input', () => {
        const input = { name: 'govName', value: 'name' };
        const label = 'Your Full Name*';
        const meta = { touched: true, error: 'Required' };
        const type = 'text';
        const placeholder = 'govName';
        const element = renderField({
            placeholder, input, label, type, meta,
        });
        shallow(element);
    });

    it('Should be called required with value', () => {
        const aptError = required('name');
        expect(aptError).to.equal(undefined);
    });

    it('customPhoneField ', () => {
        const input = { name: 'comPhoneText1' };
        const label = 'phonenumber*';
        const meta = { touched: true, error: 'Required' };
        const type = 'text';
        const placeholder = 'phonenumber';
        const element = customPhoneField({
            placeholder, label, type, input, meta,
        });
        shallow(element);
    });

    it('Should be called positiveValue with value', () => {
        const aptError = positiveValue(123);
        expect(aptError).to.equal(undefined);
    });

    it('Should be called positiveValue with value', () => {
        const aptError = positiveValue(-1);
        expect(aptError).to.equal('Must be positive values');
    });

    it('On Custom phoneChange with out values', () => {
        let event = { target: { name: 'comPhoneText1', value: '' } };
        let aptError = phoneChange(3, event);
        event = { target: { name: 'comPhoneText2', value: '' } };
        aptError = phoneChange(3, event);
        event = { target: { name: 'comPhoneText3', value: '' } };
        aptError = phoneChange(4, event);
        expect(aptError).to.equal('');
    });

    it('On Custom phoneChange  with out values', () => {
        const event = { target: { name: 'comPhoneText3', value: '' } };
        const aptError = phoneChange(4, event);
        expect(aptError).to.equal('');
    });

    it('On Custom phoneChange with values', () => {
        let event = { target: { name: 'comPhoneText1', value: '123' } };
        let aptError = phoneChange(3, event);
        event = { target: { name: 'comPhoneText2', value: '123' } };
        aptError = phoneChange(3, event);
        event = { target: { name: 'comPhoneText3', value: '1234' } };
        aptError = phoneChange(4, event);
        expect(aptError).to.equal('');
    });

    it('Should be check 5 digits number', () => {
        const val = '67567';
        const zipError1 = normalizeZip(val, '67567');
        expect(zipError1).to.equal('67567');
    });
    it('Empty case for zip', () => {
        const val = '';
        const zipError1 = normalizeZip(val, '');
        expect(zipError1).to.equal('');
    });

    it('On Custom phoneChange', () => {
        const event = { target: { name: 'comPhoneText2', value: '123' } };
        const aptError = phoneChange(3, event);
        expect(aptError).to.equal('');
    });

    it('On Custom phoneChange', () => {
        const event = { target: { name: 'comPhoneText3', value: '1234' } };
        const aptError = phoneChange(4, event);
        expect(aptError).to.equal(undefined);
    });

    it('inValid Email', () => {
        const aptError = validate({ email: '' });
        expect(aptError.email).to.equal('Required');
    });

    it('inValid Email', () => {
        const aptError = validate({ email: 'Overstock@' });
        expect(aptError.email).to.equal('Please Enter a Valid Email');
    });

    it('inValid Email', () => {
        const aptError = validate({ email: 'Overstock.com' });
        expect(aptError.email).to.equal('Please Enter a Valid Email');
    });

    it('Passing valid emailId', () => {
        const aptError = validate({ email: 'Overstock@gmail.com' });
        expect(aptError.email).to.equal(undefined);
    });

    it('On Custom phoneChange', () => {
        const event = { target: { name: 'comPhoneText1', value: '123' } };
        const aptError = phoneChange(3, event);
        console.log('aptError????????', aptError);
        expect(aptError).to.equal('');
    });
});
