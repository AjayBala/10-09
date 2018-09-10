import React, { Component } from 'react';
import './FooterDetail.scss';
import {
    Grid, Row, Col, Button,
} from 'react-bootstrap';
import {
    Events, animateScroll as scroll, scrollSpy,
} from 'react-scroll';

import ShopSocial from './ShopSocial';
import {
    governmentBuyersText,
    aboutRights, aboutFederalCustomers,
} from '../../../Utils/Utils';

class FooterDetail extends Component {
    componentDidMount () {
        Events.scrollEvent.register('begin');

        Events.scrollEvent.register('end');
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    designer() {
        scroll.scrollMore(1900);
    }

    government() {
        scroll.scrollMore(2950);
    }

    corporate() {
        scroll.scrollMore(5050);
    }

    business() {
        scroll.scrollMore(6050);
    }

    render() {
        return (
            <div className="mainContentWrap">
                <Grid>
                    <section className="iconFullWrap">
                        <Row>
                            <Col sm={6} md={3}>
                                <div className="iconBoxWrap">
                                    <span className="iconBox"> icon </span>
                                    <a onClick={this.designer}>
                                    Designer
                                        <span className="arrowdown">
                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                        </span>
                                    </a>
                                </div>
                            </Col>
                            <Col sm={6} md={3}>
                                <div className="iconBoxWrap">
                                    <span className="iconBox"> icon </span>
                                    <a onClick={this.government}>
                                    Government
                                        <span className="arrowdown">
                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                        </span>
                                    </a>
                                </div>
                            </Col>
                            <Col sm={6} md={3}>
                                <div className="iconBoxWrap">
                                    <span className="iconBox"> icon </span>
                                    <a onClick={this.corporate}>
                                    Corporate
                                        <span className="arrowdown">
                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                        </span>
                                    </a>
                                </div>
                            </Col>
                            <Col sm={6} md={3}>
                                <div className="iconBoxWrap">
                                    <span className="iconBox"> icon </span>
                                    <a onClick={this.business}>
                                    Small Business
                                        <span className="arrowdown">
                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                        </span>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <Row>
                        <Col sm={12} md={6}>
                            <div className="specialBuy">
                                <h1 className="titleBox_1">
                                    SPECIAL BUY OF THE WEEK
                                    <span>Free Shipping</span>
                                </h1>
                                <a href="/login" className="linkStyle_1">
                                    Shop Now
                                    <i className="fa fa-angle-right" aria-hidden="true" />
                                </a>
                            </div>
                        </Col>

                        <Col sm={12} md={6}>
                            <div className="specialBuy">
                                <h1 className="titleBox_1">
                                    BULK ORDER DEALS
                                    <span>Discounts</span>
                                </h1>
                                <a href="/login" className="linkStyle_1">
                                    See Offers
                                    <i className="fa fa-angle-right" aria-hidden="true" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <section className="ProfBenefitsBase">
                        <Row>
                            <Col md={12}>
                                <h3 className="title_header1"> Professional Benefits & Services </h3>
                            </Col>
                            <Col sm={12} md={5}>
                                <div className="ProfBenefitsPoints">
                                    <h3><b>Save Time & Money</b></h3>
                                    <ul>
                                        <li>Exclusive Overstock Professional Pricing</li>
                                        <li>Bulk Order Discounts</li>
                                        <li>Free Returns</li>
                                        <li>Tax exempt purchasing</li>
                                        <li>Multiple user checkout</li>
                                        <li>Referral Discounts</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={12} md={7}>
                                <div className="ProfBenefitsBox"> image </div>
                            </Col>
                        </Row>
                    </section>
                    <section className="ProfBenefitsBase">
                        <Row>
                            <Col sm={12} md={4} className="textLeftAlign">
                                <div className="boxOutsideWrap">
                                    <span className="box1">icon </span>
                                    <figcaption>Key Features </figcaption>
                                </div>
                            </Col>
                            <Col sm={12} md={4} className="textCenterAlign">
                                <div className="boxOutsideWrap">
                                    <span className="box1">icon </span>
                                    <figcaption>Key Features </figcaption>
                                </div>
                            </Col>
                            <Col sm={12} md={4} className="textRightAlign">
                                <div className="boxOutsideWrap">
                                    <span className="box1">icon </span>
                                    <figcaption>Key Features </figcaption>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section className="ProfBenefitsBase">
                        <Row>
                            <Col md={12}>
                                <h3 className="title_header1"> why overstock profesional? </h3>
                            </Col>
                            <Col sm={12} md={5}>
                                <div className="ProfBenefitsPoints">
                                    <h3>What makes us different</h3>
                                    <ul className="videoBoxList">
                                        <li><p>-Summary of key points from video</p></li>
                                        <li><p>-Summary of key points from video</p></li>
                                        <li><p>-Summary of key points from video</p></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={12} md={7}>
                                <div className="ProfBenefitsBox"> Video </div>
                            </Col>
                        </Row>
                    </section>
                    <section className="ProfBenefitsBase" id="designer">
                        <Row>
                            <Col md={12}>
                                <h3 className="title_header1"> Designer Benefits  </h3>
                                <p className="paragraph_Txt">Buyers from federal, state and local governments, the military and educational institutions will find The Home Depot ready to be your company of choice. Our dedicated Government Solutions team is available for procurement contracts, and national retail network allows us to tap into an unparalleled supply chain to offer a total solution to your needs.</p>
                            </Col>
                            <Grid>
                                <Row>
                                    <Col sm={12}>
                                        <div className="ProfBenefitsBox"> image </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} sm={12}>
                                        <div className="ProfBenefitsBox">
                                            <h3>Interior Designer</h3>
                                        </div>
                                        <p className="paragraph_Txt">Buyers from federal, state and local governments, the military and educational institutions will find The Home Depot ready to be your company of choice. Our dedicated Government Solutions team is available for procurement contracts, and national retail network allows us to tap into an unparalleled supply chain to offer a total solution to your needs. </p>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <div className="ProfBenefitsBox">
                                            <h3> Architect </h3>
                                        </div>
                                        <p className="paragraph_Txt">Buyers from federal, state and local governments, the military and educational institutions will find The Home Depot ready to be your company of choice. Our dedicated Government Solutions team is available for procurement contracts, and national retail network allows us to tap into an unparalleled supply chain to offer a total solution to your needs. </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} className="signBtnOutWrap">
                                        <Button type="submit" className="navigatebutton" onClick={this.scrollToTop}>Sign Up </Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </Row>
                    </section>
                    <section className="ProfBenefitsBase" id="government">
                        <Row>
                            <Col md={12}>
                                <h3 className="title_header1"> Solutions for Government Buyers  </h3>
                                <div className="ProfBenefitsBox"> image </div>
                                <p className="paragraph_Txt">Buyers from federal, state and local governments, the military and educational institutions will find The Home Depot ready to be your company of choice. Our dedicated Government Solutions team is available for procurement contracts, and national retail network allows us to tap into an unparalleled supply chain to offer a total solution to your needs.</p>
                            </Col>
                            <Col md={6} sm={12}>
                                <ol className="listtype">
                                    <li>■ COMPETITIVE PRODUCT PRICING </li>
                                    <li>
                                    ■ DEDICATED NATIONAL SUPPORT TEAM & 2,200 + LOCATIONS
                                    </li>
                                    <p className="spaceBuy">
                                        {'There\'s no cost to participate and no minimum spending requirement to access:'}
                                    </p>
                                    <li className="spacePoints">• Expansive order and delivery options on over 300,000 products </li>
                                    <li className="spacePoints">• Volume Pricing Program and special discounts on purchases across the store </li>
                                    <li className="spacePoints">• Convenient payment options - purchase orders and procurement cards accepted </li>
                                    <li className="spacePoints">• One-step tax exemption registration with email renewal reminders </li>

                                </ol>
                            </Col>
                            <Col md={6} sm={12}>
                                <ol className="listtype">
                                    <li>■ LOW-COST AND RETURN OPTIONS</li>
                                    <li>■ CONVENIENT PAYMENT OPTIONS</li>
                                    <p className="spaceBuy">U.S. Communities is a government cooperative purchasing program that combines and strengthens the purchasing power of public entities nationwide. The result is reduced cost and the assurance that your agency meets the requirements for competitive solicitation.</p>
                                    <p>Together we enable</p>
                                    <li>
    • Reduced procurement costs on Maintenance, Repair and Operations supplies
                                    </li>
                                    <li>• Purchasing without the need for RFPs</li>
                                    <li>• Compliance with competitive solicitation requirements</li>
                                    <li>
    • Access to general contractors through the Renovation Services and Installation Services programs
                                    </li>
                                    <li>• Ordering through the U.S. Communities Marketplace</li>
                                </ol>
                            </Col>
                            <Col sm={12}>
                                <p className="paragraph_Txt">
                                    {aboutRights}
                                </p>
                            </Col>
                        </Row>
                    </section>
                    <section className="ProfBenefitsBase">
                        <Row>
                            <Col md={12}>
                                <h3 className="title_header1_CAP">SUPPORTING OUR FEDERAL CUSTOMERS</h3>
                                <p className="paragraph_Txt">{aboutFederalCustomers}</p>
                                <div className="ProfBenefitsBox"> image </div>
                            </Col>
                        </Row>
                    </section>
                    <section className="ProfBenefitsBase">
                        <Row>
                            <Col md={12}>
                                <h3 className="title_header1_CAP">SIMPLIFYING TAX EXEMPTION</h3>
                                <p className="paragraph_Txt">With our one-step tax exempt registration, tax exempt customers,including buyers for state and local governments or state-defined exempt organizations,retailers,resellers and manufacturers in longer have to complete the instore paperwork with every exempt transaction.</p>
                            </Col>
                        </Row>
                    </section>
                    <section className="ProfBenefitsBase">
                        <Row>
                            <Col sm={12} md={4} className="textLeftAlign">
                                <div className="boxOutsideWrap">
                                    <span className="box1">icon </span>
                                </div>
                            </Col>
                            <Col sm={12} md={4} className="textCenterAlign">
                                <div className="boxOutsideWrap">
                                    <span className="box1">icon </span>
                                </div>
                            </Col>
                            <Col sm={12} md={4} className="textRightAlign">
                                <div className="boxOutsideWrap">
                                    <span className="box1">icon </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} className="signBtnOutWrap">
                                <Button type="submit" className="navigatebutton" onClick={this.scrollToTop}>Sign Up </Button>
                            </Col>
                        </Row>
                    </section>
                    <section className="ProfBenefitsBase" id="corporate">
                        <Row>
                            <Col md={12}>
                                <h3 className="title_header1">
                                    Corporate Benefits
                                    <span> (overview & educational) </span>
                                </h3>
                                <p className="paragraph_Txt">Buyers from federal, state and local governments, the military and educational institutions will find The Home Depot ready to be your company of choice. Our dedicated Government Solutions team is available for procurement contracts, and national retail network allows us to tap into an unparalleled supply chain to offer a total solution to your needs.</p>
                            </Col>
                            <Grid>
                                <Row>
                                    <Col sm={12}>
                                        <div className="ProfBenefitsBox"> image </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} sm={12}>
                                        <div className="ProfBenefitsBox">
                                            <h3>Education Use Case Content</h3>
                                        </div>
                                        <p className="paragraph_Txt">Buyers from federal, state and local governments, the military and educational institutions will find The Home Depot ready to be your company of choice. Our dedicated Government Solutions team is available for procurement contracts, and national retail network allows us to tap into an unparalleled supply chain to offer a total solution to your needs. </p>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <div className="ProfBenefitsBox">
                                            <h3> Contractor Use Case Content </h3>
                                        </div>
                                        <p className="paragraph_Txt">Buyers from federal, state and local governments, the military and educational institutions will find The Home Depot ready to be your company of choice. Our dedicated Government Solutions team is available for procurement contracts, and national retail network allows us to tap into an unparalleled supply chain to offer a total solution to your needs.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} className="signBtnOutWrap">
                                        <Button type="submit" className="navigatebutton" onClick={this.scrollToTop}>Sign Up </Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </Row>
                    </section>
                    <section className="ProfBenefitsBase" id="business">
                        <Row>
                            <Col md={12}>
                                <h3 className="title_header1">
                                    Just Right for Your Small Business
                                    <span> (overview & educational) </span>
                                </h3>
                                <p className="paragraph_Txt">
                                    {governmentBuyersText}
                                </p>
                            </Col>
                            <Grid>
                                <Row>
                                    <Col md={6} sm={12}>
                                        <div className="ProfBenefitsBox">
                                            <h3>Designer Use Case Content</h3>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <div className="ProfBenefitsBox">
                                            <h3> Hospitality Use Case Content </h3>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <div className="ProfBenefitsBox">
                                            <h3>Hospitality Use Case Content</h3>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <div className="ProfBenefitsBox">
                                            <h3>Designer Use Case Content</h3>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <div className="ProfBenefitsBox">
                                            <h3>Dealership Use Case Content</h3>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <div className="ProfBenefitsBox">
                                            <h3>SBO Use Case Content</h3>
                                        </div>
                                    </Col>
                                    <Col md={12} sm={12}>
                                        <p className="paragraph_Txt">
                                            {governmentBuyersText}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} className="signBtnOutWrap marginBottom">
                                        <Button type="submit" className="navigatebutton" onClick={this.scrollToTop}>Sign Up </Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </Row>
                    </section>
                </Grid>
                <ShopSocial />
            </div>
        );
    }
}

export default FooterDetail;
