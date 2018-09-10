import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import govtBusinessInfo, {
    validate, renderField, renderDropDown, phoneChange, customPhoneField, normalizeZip, required, positiveValue,
} from './GovtBusinessInfo';

const customerDetails = {
    name: 'test user',
    categorys: 'test categorys',
    agency: 'test agency ',
    title: 'test title',
    Email: 'title@email.com',
    comPhoneText1: '-1',
    comPhoneText2: '-1',
    comPhoneText3: '-1',
    Address: 'Los Angeles',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90111',
};


const addCallerContact = sinon.spy;


describe('Test suits for <govtBusinessInfo />', () => {
    const mockStore = configureStore([]);
    const store = mockStore(customerDetails);
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store} actions={{ addCallerContact }} >
                <govtBusinessInfo />
            </Provider>,
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should load the govtBusinessInfo component', () => {
        expect(wrapper).to.exist;
        expect(wrapper).to.have.length(1);
    });

    it('inValid Email', () => {
        const aptError = validate({ Email: '' });
        expect(aptError.Email).to.equal('Required');
    });

    it('inValid Email', () => {
        const aptError = validate({ Email: 'Overstock@' });
        expect(aptError.Email).to.equal('Please Enter a Valid Email');
    });

    it('renders an error message for the input', () => {
        const input = { name: 'email' };
        const label = 'Email*';
        const meta = { touched: true, error: 'Required' };
        const type = 'email';
        const placeholder = 'Email';
        const element = renderField({
            placeholder, label, type, input, meta,
        });
        shallow(element);
    });

    it('renders an error message for the input', () => {
        const input = { name: 'categorys' };
        const label = 'Organization Category*';
        const meta = { touched: true, error: 'Required' };
        const type = 'text';
        const placeholder = 'categorys';
        const element = renderDropDown({
            placeholder, label, type, input, meta,
        });
        shallow(element);
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


    it('On Custom phoneChange with out values', () => {
        let event = { target: { name: 'comPhoneText1', value: '' } };
        let aptError = phoneChange(3, event);
        event = { target: { name: 'comPhoneText2', value: '' } };
        aptError = phoneChange(3, event);
        event = { target: { name: 'comPhoneText3', value: '' } };
        aptError = phoneChange(4, event);
        expect(aptError).to.equal('');
    });

    it('On Custom phoneChange with out values', () => {
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


    it('should render the component items properly', () => {
        const Govtwrapper = shallow(<govtBusinessInfo />);
        expect(Govtwrapper.find('.formOutterWrap')).to.exist;
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

    it('Should be called required with value', () => {
        const aptError = required('name');
        expect(aptError).to.equal(undefined);
    });

    it('Should be called positiveValue with value', () => {
        const aptError = positiveValue(123);
        expect(aptError).to.equal(undefined);
    });

    it('Should be called positiveValue with value', () => {
        const aptError = positiveValue(-1);
        expect(aptError).to.equal('Must be positive values');
    });
});
