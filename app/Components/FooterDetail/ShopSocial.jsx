import React from 'react';
import {
    Row, Col, Nav,
    NavItem, Button,
} from 'react-bootstrap';
import './ShopSocial.scss';


const ShopSocial = () => (
    <div className="footerBoxContainer">
        <div className="footerTopBoxWrap">
            <div className="container">
                <Row>
                    <Col xs={10} md={8}>
                        <h5 className="title_h6">SHOP SOCIAL®</h5>
                        <Nav className="socialLinksWrap">
                            <NavItem href="#">
                                <i className="fa fa-facebook-official fa-lg" aria-hidden="true" />
                            </NavItem>
                            <NavItem href="#">
                                <i className="fa fa-instagram fa-lg" aria-hidden="true" />
                            </NavItem>
                            <NavItem href="#">
                                <i className="fa fa-twitter fa-lg" aria-hidden="true" />
                            </NavItem>
                            <NavItem href="#">
                                <i className="fa fa-pinterest-p fa-lg" aria-hidden="true" />
                            </NavItem>
                            <NavItem href="#">
                                <i className="fa fa-youtube-play fa-lg" aria-hidden="true" />
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </div>
        </div>
        <div className="footerTopBoxWrap">
            <div className="container">
                <Row className="footerMenuWrap">
                    <Col xs={6} md={3}>
                        <Nav className="footerMenuList">
                            <NavItem>
                                MY ACCOUNT
                            </NavItem>
                            <NavItem href="#">
                                MY Orders
                            </NavItem>
                            <NavItem href="#">
                                Account Settings
                            </NavItem>
                            <NavItem href="#">
                                Join Club O
                            </NavItem>
                            <NavItem href="#">
                                --
                            </NavItem>
                            <NavItem href="#">
                                Manage My Club o Rewards Master Card®
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs={6} md={3}>
                        <Nav className="footerMenuList">
                            <NavItem href="#">
                                LET US HELP
                            </NavItem>
                            <NavItem href="#">
                                Customer Feedback
                            </NavItem>
                            <NavItem href="#">
                                Online Help Center
                            </NavItem>
                            <NavItem href="#">
                                Contact Customer Care
                            </NavItem>
                            <NavItem href="#">
                                Contact Customer Care via Twitter
                            </NavItem>
                            <NavItem href="#">
                                --
                            </NavItem>
                            <NavItem href="#">
                                Give Back Box Label
                            </NavItem>
                            <NavItem href="#">
                                Shipping Information
                            </NavItem>
                            <NavItem href="#">
                                International Help
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs={6} md={3}>
                        <Nav className="footerMenuList">
                            <NavItem href="#">
                                ABOUT OVERSTOCK.COM®
                            </NavItem>
                            <NavItem href="#">
                                About Overstock™
                            </NavItem>
                            <NavItem href="#">
                                Careers
                            </NavItem>
                            <NavItem href="#">
                                Media Room
                            </NavItem>
                            <NavItem href="#">
                                Sell Your Products
                            </NavItem>
                            <NavItem href="#">
                                --
                            </NavItem>
                            <NavItem href="#">
                                Overstock™ Investor Relations
                            </NavItem>
                            <NavItem href="#">
                                Overstock™ Cares
                            </NavItem>
                            <NavItem href="#">
                                Overstock™ Supply Chain Transparency
                            </NavItem>
                            <NavItem href="#">
                                Peace Coliseum - Global Headquarters
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs={6} md={3}>
                        <Nav className="footerMenuList">
                            <NavItem href="#">
                                MORE WAYS TO SHOP
                            </NavItem>
                            <NavItem href="#">
                                Tips & Ideas
                            </NavItem>
                            <NavItem href="#">
                                Overstock Coupons
                            </NavItem>
                            <NavItem href="#">
                                OVERSTOCK™ CREDIT
                            </NavItem>
                            <NavItem href="#">
                                --
                            </NavItem>
                            <NavItem href="#">
                                Apply for Overstock.com Rewards
                            </NavItem>
                            <NavItem href="#">
                                MasterCard®
                            </NavItem>
                            <NavItem href="#">
                                Apply for Leasing
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </div>
        </div>
        <div className="footerBottomBoxWrap pb-3">
            <div className="container">
                <Row>
                    <Col xs={12} md={4}>
                        <div className="footerContBox">
                            <h4 className="mb-2">Cars by Overstock</h4>
                            <p>
Search millions of new, used and certified pre-owned
                                <br/>
cars from dealers and private parties - all in one place.
                            </p>
                            <Button type="button" className="socialButton">Find Cars</Button>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="footerContBox">
                            <h4 className="mb-2">FinanceHub</h4>
                            <p>
Your center hub for loans, credit cards, insurance and
                                <br/>
more.Take the stress out of funding your dreams.
                            </p>
                            <Button type="button" className="socialButton">Learn More</Button>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="footerContBox">
                            <h4 className="mb-2">Pet Adoptions</h4>
                            <p>
                                {'We\'ve teamed up with shelters across the country to help'}
                                <br/>
             you find your new best friend.
                            </p>
                            <Button type="button" className="socialButton">Find Pets</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        <div className="footerBottomBoxWrap">
            <div className="container">
                <Row>
                    <Col xs={6} md={6}>
                        <div className="footerContBox pb-3">
                            <h3 className="mt-0">Shop for Life™</h3>
                            <p>
                Shop Overstock.com and find the best online deals on everything for your home.we
                                <br/>
                work every day to bring you discounts on new products across our entire store.Whether
                                <br/>
                                {'you\'re looking for memorable gifts or everyday essentials, you can buy them here for'}
                                <br/>
less.
                                <br/>
                Eziba® | Shop Eziba.com®
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div className="footerContBox">
                            <h3 className="mt-0">O.com®</h3>
                            <p>
                Over half a million prices checked each week. Overstock strives to deliver the
                                <br/>
                lowest prices and the biggest savings on all the products you need for your home.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="footerContBox p-0">
                            <p className="mb-0">
                 © Copyright 1999-2018, Overstock.com®
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="footer-links clearfix">
                            <NavItem href="#" className="pull-left">
              Privacy Policy®
                            </NavItem>
                            <NavItem href="#" className="pull-left">
              Terms & Conditions
                            </NavItem>
                            <NavItem href="#" className="pull-left">
              Promotion Terms
                            </NavItem>
                            <NavItem href="#" className="pull-left">
              Ship to:
                            </NavItem>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
);


export default ShopSocial;
