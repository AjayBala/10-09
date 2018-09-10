import { expect } from 'chai';
import LoginReducer from './LoginReducer';
// import * as actions from '../actionTypes/LoginActionTypes';

describe('SearchFilterReducer', () => {
    const loginData = {
        emailId: 'professional@overstock.com',
        password: 'Overstock18',
    };
    it('Should be called LOGIN_VALUES', () => {
        expect(
            LoginReducer(undefined, {
                type: 'LOGIN_VALUES',
                payload: loginData,
            }),
        ).to.deep.equal({ userValues: loginData });
    });

    it('Should be called LOGIN_VALUES', () => {
        expect(
            LoginReducer([], {
                type: 'LOGIN_VALUES',
                payload: loginData,
            }),
        ).to.deep.equal({ userValues: loginData });
    });


    it('Should be called GET_EMAILID', () => {
        expect(
            LoginReducer(undefined, {
                type: 'GET_EMAILID',
                payload: loginData.emailId,
            }),
        ).to.deep.equal({ emailId: loginData.emailId });
    });
    it('initialstate', () => {
        expect(
            LoginReducer(undefined, {}),
        ).to.deep.equal({});
    });
});
