import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, ControlLabel } from 'react-bootstrap';
import './ShoppingPreference.scss';
import _isEmpty from 'lodash/isEmpty';
import _includes from 'lodash/includes';
import ShoppingCategories from '../../json/ShoppingCategory.json';
import history from '../../history';

class ShoppingPreference extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ShoppingCategories.store,
            selected: [],
            isSearchFocused: false,
            isCloseIconVisible: false,
            noCategoryFound: null,
        };
        this.searchValue;
    }

    componentWillMount() {
        document.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick);
    }

    filterCategories = (event) => {
        let listOfCategories = ShoppingCategories.store;

        if (_isEmpty(event.target.value)) {
            event.target.placeholder = '';
            this.setState({
                items: listOfCategories,
                isCloseIconVisible: false,
                isSearchFocused: false,
            });
        } else {
            let categoryNotFound = null;

            this.setState({
                items: [],
                isSearchFocused: true,
            });

            listOfCategories = listOfCategories.concat(ShoppingCategories.departments);

            listOfCategories = listOfCategories.filter(item => (
                (item.toLowerCase().search(event.target.value.toLowerCase()) !== -1)
            ));

            categoryNotFound = (listOfCategories.length === 0 ? 'No Category Found' : null);

            this.setState({
                items: listOfCategories,
                isCloseIconVisible: true,
                noCategoryFound: categoryNotFound,
            });
        }
    }

    selectCategory = (value) => {
        const { selected } = this.state;
        if (!_includes(selected, value)) {
            selected.push(value);
            this.setState({
                ...selected,
            });
        }
    }

    removeSelection = (value) => {
        const { selected } = this.state;
        const filteredList = selected.filter(item => item !== value);
        this.setState({
            selected: filteredList,
        });
    }

    resetToDefaulltCategory = () => {
        const domNode = ReactDOM.findDOMNode;
        domNode(this.searchValue).value = '';
        domNode(this.searchValue).placeholder = 'Ex. Couch, Lighting, Faucet';
        this.setState({
            isSearchFocused: false,
            items: ShoppingCategories.store,
            isCloseIconVisible: false,
        });
    }

    categoriesList = () => {
        const { isSearchFocused, noCategoryFound, items } = this.state;
        const categoryDetailes = {
            title: null,
        };

        categoryDetailes.title = (isSearchFocused) ? 'Suggested Searches' : 'Popular Categories';

        return (
            <Fragment>
                <ControlLabel className="shopping-label">{categoryDetailes.title}</ControlLabel>
                {isSearchFocused
                    ? (
                        <Row>
                            <div className="noCategoryFound">{noCategoryFound}</div>
                            {items.map(value => (
                                <Col md={12} key={value}>
                                    <div className="categories suggested-search" onClick={() => this.selectCategory(value)}>
                                        {value}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <Row>
                            {items.map(value => (
                                <Col md={3} sm={3} key={value}>
                                    <div className="categories" onClick={() => this.selectCategory(value)}>
                                        {value}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    )
                }
            </Fragment>
        );
    }

    redirectToHomePage = () => {
        history.push('./home');
    }

    handleClick = (e) => {
        if (!this.node.contains(e.target)) {
            const domNode = ReactDOM.findDOMNode;
            domNode(this.searchValue).value = '';
            domNode(this.searchValue).placeholder = 'Ex. Couch, Lighting, Faucet';
            this.setState({
                items: ShoppingCategories.store,
                isCloseIconVisible: false,
                isSearchFocused: false,
            });
        }
    }

    render() {
        console.log(this.state, 'CHECKKKKKKKKKK');
        const { isCloseIconVisible, selected, isSearchFocused } = this.state;
        /* eslint-disable react/prop-types */
        const { previousPage } = this.props;
        return (
            <div className="shopping-preference">
                <div className="shopping-description">What type of products do you shop for? (Optional)</div>
                <div ref={(node) => { this.node = node; }}>
                    <Row>
                        <Col md={12}>
                            <div className="shopping-category">
                                <div className="search">
                                    <i className="fa fa-search" aria-hidden="true" />
                                    <input ref={(el) => { this.searchValue = el; }} placeholder="Ex. Couch, Lighting, Faucet" onInput={this.filterCategories} onFocus={this.filterCategories} />
                                    <span className={isCloseIconVisible ? 'glyphicon glyphicon-remove closeIconOvrride' : 'removeCloseIcon'} onClick={this.resetToDefaulltCategory} />
                                </div>
                                <div className="customScrollBar">
                                    {this.categoriesList()}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className="shopping-selected customScrollBar customScrollBarSelected">
                                <ControlLabel className="shopping-label">Selected Items</ControlLabel>
                                {selected.length
                                    ? (
                                        <Row>
                                            {selected.map(value => (
                                                <Col md={3} sm={3} key={value}>
                                                    <div>
                                                        <div className="categories selected-button">
                                                            {value}
                                                            <span className="glyphicon glyphicon-remove closeIconStyle" onClick={() => this.removeSelection(value)} />
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    ) : <div />}
                            </div>
                        </Col>
                    </Row>
                    <form className="form-style">
                        <div>
                            <div className="terms">
                                By clicking finish you agree to user
                                {' '}
                                <a href="https://help.overstock.com/help/s/article/TERMS-AND-CONDITIONS">Terms & Conditions </a>
                            </div>

                            <div className="formBtnWrap">
                                <button className="formBtn" type="submit" onClick={previousPage}>Back</button>
                                <button className="formBtn buttonOverrides" type="submit" onClick={this.redirectToHomePage}>{(isSearchFocused || selected.length) ? 'Finish' : 'Skip for Now & Finish'}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ShoppingPreference;
