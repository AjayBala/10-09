import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import Quickverify, {
    validate,
    normalizeZip,
    normalizeCard,
} from './Quickverify';
// normalizeZip, normalizeCard


describe('Test suits for <Quickverify />', () => {
    let component;
    const submitCase = sinon.spy();
    let wrapperRedComp;
    beforeEach(() => {
        const mockStore = configureStore([]);
        const store = mockStore({
            context: { deviceType: { isDesktop: false } },
        });
        const handleSubmit = sinon.spy();
        const previousPage = sinon.spy();
        wrapperRedComp = shallow(<Quickverify
            handleSubmit={handleSubmit}
            previousPage={previousPage}
            submitCase={submitCase}/>);
        component = mount(
            <Provider store={store}>
                <Quickverify submitCase={handleSubmit}/>
            </Provider>,
        );
    });

    it('Check if the werapper component exist', () => {
        expect(wrapperRedComp).to.exist;
    });

    it('Quickverify page onFocus function trigger', () => {
        expect(component).to.exist;
        // const e = { target: { files: [{ Login }] } };
        component.find('form').at(0).simulate('focus');
    });

    it('Quickverify page trigger normalizeZip', () => {
        let aptError = normalizeZip(undefined);
        expect(aptError).to.equal(undefined);
        aptError = normalizeZip('aaaa');
        expect(aptError).to.equal('');
    });

    it('Should be check starting 4 digits number', () => {
        const val = '6756';
        const cardError1 = normalizeCard(val);
        expect(cardError1).to.equal('6756-');
    });

    it('Should be check 8 digits number', () => {
        const val = '67777777';
        const cardError1 = normalizeCard(val);
        expect(cardError1).to.equal('6777-7777-');
    });

    it('Should be check 12 digits number', () => {
        const val = '677777778989';
        const cardError1 = normalizeCard(val);
        expect(cardError1).to.equal('67777777-8989-');
    });

    it('Should be check 12 digits number', () => {
        const val = '6777777789893';
        const cardError1 = normalizeCard(val);
        expect(cardError1).to.equal('6777-7777-8989-3');
    });

    it('Should be check 2 digits number', () => {
        const val = '67';
        const cardError1 = normalizeCard(val, '67');
        expect(cardError1).to.equal('67');
    });

    it('Should be check 6 digits number', () => {
        const val = '672299';
        const cardError1 = normalizeCard(val, '672299');
        expect(cardError1).to.equal('6722-99');
    });

    it('Should be check 10 digits number', () => {
        const val = '6722996666';
        const cardError1 = normalizeCard(val, '672299');
        expect(cardError1).to.equal('67229966-66');
    });

    it('Should be check 6 digits number', () => {
        const val = '';
        const cardError1 = normalizeCard(val, '');
        expect(cardError1).to.equal('');
    });

    it('Quickverify page trigger normalizeCard', () => {
        const aptError = normalizeCard(undefined, undefined);
        expect(aptError).to.equal(undefined);
    });


    it('Year should be at least 2019', () => {
        const aptError = validate({ year: 2020 });
        expect(aptError.year).to.equal(undefined);
    });

    it('Year should be at least 2019', () => {
        const aptError = validate({ year: 2016 });
        expect(aptError.year).to.equal('Year should be at least 2019');
    });

    it('Year should be at least 2019', () => {
        const aptError = validate({ year: 2031 });
        expect(aptError.year).to.equal('Year should be below 2030');
    });

    it('Month Filed should be between 1 to 12', () => {
        const aptError = validate({ month: 12 });
        expect(aptError.month).to.equal(undefined);
    });

    it('Month Filed should be between 1 to 12', () => {
        const aptError = validate({ month: -1 });
        expect(aptError.month).to.equal('Month should be between 1 to 12');
    });

    it('Month Filed should be between 1 to 12', () => {
        const aptError = validate({ month: 11 });
        expect(aptError.month).to.equal(undefined);
    });

    it('Month Filed should be between 1 to 12', () => {
        const aptError = validate({ month: 13 });
        expect(aptError.month).to.equal('Month should be between 1 to 12');
    });
});
