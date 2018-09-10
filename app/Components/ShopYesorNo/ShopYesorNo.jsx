import React from 'react';
import { Button } from 'react-bootstrap';
import './ShopYesorNo.scss';
import history from '../../history';

const ShopYesorNo = () => (
    <div className="formWrap shopYesNoWrap">
        <p className="shopEmailTxt">Do you already Shop on Overstock using your work email?</p>
        <Button type="button" className="NoButton" onClick={() => history.push('./signup')}>No</Button>
        <Button type="button" className="YesButton" onClick={() => history.push('./exist-account')}>Yes</Button>
        <p className="signInTxt">
Already a member of Overstock Professional?
            <a href="/">&nbsp;&nbsp;Sign In </a>
        </p>
    </div>
);
export default ShopYesorNo;
