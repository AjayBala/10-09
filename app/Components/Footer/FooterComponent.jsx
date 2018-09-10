import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './FooterComponent.scss';


const FooterComponent = () => (
    <footer id="footerWrap">
        <div className="container">
            <Nav className="footerNav_1">
                <NavItem href="#">
                    <b style={{ textAlign: 'center' }}> Frequently Asked Questions </b>
                    {' '}
                    <div
                        className="vl" />
                </NavItem>
                <NavItem href="#">
                    <b>Contact Customer Service</b>
                    {' '}
                    <div
                        className="vl"/>
                </NavItem>
                <NavItem href="#">
                    <b> Easy Returns</b>
                </NavItem>
            </Nav>

            <Nav className="footerNav_1 footerNav_2">
                <NavItem href="#">
          Privacy Policy&nbsp;
                    {' '}
                    <div className="footerline">| </div>
                </NavItem>
                <NavItem href="#" style={{ padding: '0px' }}>
          Site User Terms & Conditions
                </NavItem>
            </Nav>
        </div>
    </footer>
);

export default FooterComponent;
