import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {
    Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import SignupForm from './SignupForm';
import Signin from '../Signin/SigninForm';
import Password from '../ForgotPassword/password';
import './Signup.scss';
import Login from '../Login/Login';
import TableInfo from './table';
import FooterDetail from '../FooterDetail/FooterDetail';
import ShopYesorNo from '../ShopYesorNo/ShopYesorNo';

/* eslint-disable react/prop-types */
const SignupPage = ({ location }) => {
    const { pathname } = location;
    return (
        <Fragment>
            <div className="bgStyle">
                <Grid>
                    <Row>
                        <h1 className="bannerTitle_1"> Discover the one-stop shop that works for you. </h1>

                        <Col lg={6} md={6} sm={12}>
                            <div className="bnrFormOutWrap">
                                <h1 className="signupTitle_1">  Welcome to Oprofessional </h1>
                                <Tabs className="SignTabWrap">
                                    <TabList className="SignTabHeadWrap">
                                        <Tab className="SignTabHead">
                                            <span>
                                                Sign Up
                                            </span>
                                        </Tab>
                                        <Tab className="SignTabHead">
                                            <span>
                                                Sign In
                                            </span>
                                        </Tab>
                                        <Tab className="SignTabHead">
                                            <span>
                                                Forgot
                                            </span>
                                        </Tab>
                                    </TabList>

                                    <TabPanel>
                                        { pathname && pathname === '/signup' && <SignupForm />}
                                        { pathname && pathname === '/shop-yesno' && <ShopYesorNo />}
                                    </TabPanel>
                                    <TabPanel>
                                        {/* <Signin /> */}
                                        <Login />
                                    </TabPanel>
                                    <TabPanel>
                                        <Password />
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <TableInfo/>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <FooterDetail />
        </Fragment>
    );
};

// SignupPage.propTypes = {
//     location: PropTypes.string.isRequired,
// };

export default SignupPage;
