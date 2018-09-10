import React from 'react';
import { Router, Route } from 'react-router';
import Favicon from 'react-favicon';
import PrivateRoute from './Components/PrivateRouter/PrivateRouter';
import history from './history';
import Login from './Components/Login/Login';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Exitaccount from './Components/Exitaccount/Exitaccount';
import SignupPage from './Components/Signup/SignupPage';
import HomePage from './Components/HomePage/HomePage';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import SendEmail from './Components/ForgotPassword/SendEmail/SendEmail';
import ForgotPasswordEmailTemplate from './Components/ForgotPassword/ForgotPasswordEmailTemplate/ForgotPasswordEmailTemplate';
import Layout from './Components/Layout';
import FavImg from '../assets/Images/favicon.ico';
import Com from './Components/Com/Com';
import Govt from './Components/Govt/Govt';
import ForgotPasswordPopUp from './Components/ForgotPassword/ForgotPasswordPopUp/ForgotPasswordPopUp';

const App = () => (
    <Layout>
        <Favicon url={FavImg} />
        <section id="mainWrap">
            <Router history={history}>
                <React.Fragment>
                    <PrivateRoute exact path="/" component={<h1>Haii this is home Page</h1>} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/exist-account" component={Exitaccount}/>
                    <Route path="/com" component={Com}/>
                    <Route path="/gov" component={Govt} />
                    <Route path="/create-account" component={CreateAccount} />
                    <Route path="/shop-yesno" component={SignupPage}/>
                    <Route path="/home" component={HomePage} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/send-email" component={SendEmail} />
                    <Route path="/email-template" component={ForgotPasswordEmailTemplate} />
                    <Route path="/Change-password" component={ForgotPasswordPopUp} />
                </React.Fragment>
            </Router>
        </section>
    </Layout>
);

export default App;
