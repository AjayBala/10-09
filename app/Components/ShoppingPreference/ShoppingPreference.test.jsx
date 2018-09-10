import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import ShoppingPreference from './ShoppingPreference';

describe('<ShoppingPreference />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ShoppingPreference />);
    });
    it('Should render ShoppingPreference component', () => {
        expect(wrapper).to.be.exist;
    });
    it('Category method to have been called for suggested searches', () => {
        const selectedList = [
            'Baby',
        ];
        const instance = wrapper.instance();
        const spy = sinon.spy(instance, 'selectCategory');
        instance.setState({ isSearchFocused: true, selected: selectedList });
        wrapper.find('.categories').at(0).simulate('click');
        expect(spy.calledWith('Baby')).to.be.equal(true);
        expect(instance.state.selected).to.have.length(1);
    });
    it('Category method to have been called for popular category', () => {
        const selectedList = [
            'Baby',
        ];
        const instance = wrapper.instance();
        const spy = sinon.spy(instance, 'selectCategory');
        instance.setState({ isSearchFocused: false, selected: selectedList });
        wrapper.find('.categories').at(1).simulate('click');
        expect(spy.called).to.be.equal(true);
        expect(instance.state.selected).to.have.length(2);
    });
    it('Resetting to default category on clicking close icon on search', () => {
        const shoppingWrapper = mount(<ShoppingPreference />);
        const instance = shoppingWrapper.instance();
        const spy = sinon.spy(instance, 'resetToDefaulltCategory');
        instance.setState({ isCloseIconVisible: true });
        const test = shoppingWrapper.find('.search');
        test.find('span').at(0).simulate('click');
        expect(spy.called).to.be.equal(true);
    });
    it('Remove the selected category from the selected items', () => {
        const selectedList = [
            'Baby',
        ];
        const instance = wrapper.instance();
        const spy = sinon.spy(instance, 'removeSelection');
        instance.setState({ selected: selectedList });
        wrapper.find('.closeIconStyle').at(0).simulate('click');
        expect(spy.calledWith('Baby')).to.be.equal(true);
        expect(instance.state.selected).to.have.length(0);
    });
    it('Categories are retained on clearing the value', () => {
        const shoppingWrapper = mount(<ShoppingPreference />);
        const instance = shoppingWrapper.instance();
        const searchDiv = shoppingWrapper.find('.search');
        searchDiv.find('input').at(0).simulate('input');
        instance.filterCategories({ target: { value: 'baby' } });
    });
    it('Categories are filtered on entering the search item', () => {
        const shoppingWrapper = mount(<ShoppingPreference />);
        const instance = shoppingWrapper.instance();
        const searchDiv = shoppingWrapper.find('.search');
        searchDiv.find('input').at(0).simulate('input');
        instance.filterCategories({ target: { value: 'babyxx' } });
        expect(instance.state.noCategoryFound).to.equal('No Category Found');
    });
    it('Categories are filtered on focused', () => {
        const shoppingWrapper = mount(<ShoppingPreference />);
        const searchDiv = shoppingWrapper.find('.search');
        searchDiv.find('input').at(0).simulate('focus');
    });
    it('Redirect to home page', () => {
        wrapper.find('.buttonOverrides').at(0).simulate('click');
    });
    it('Click event is removed on component unmount', () => {
        const shoppingWrapper = mount(<ShoppingPreference />);
        const instance = shoppingWrapper.instance();
        const e = {
            type: 'event',
            target: {
                value: 'test',
            },
        };
        const input = { value: 'someValue', contains: () => {} };
        instance.node = input;
        instance.handleClick(e);
    });
    it('Click event is removed on component unmounted', () => {
        const shoppingWrapper = mount(<ShoppingPreference />);
        shoppingWrapper.unmount();
    });
});
