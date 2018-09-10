import { expect } from 'chai';
import * as LoginActionTypes from '../actionTypes/LoginActionTypes';
import * as actions from './LoginAction';

describe('Login Actions', () => {
    describe('LoginPage', () => {
        let loginAction = null;
        it('returns correct action type get note', () => {
            loginAction = actions.loginValues();
            expect(loginAction.type).to.equal(LoginActionTypes.GET_LOGIN_VALUES_TYPE);
        });
        it('returns correct action type get note', () => {
            loginAction = actions.getEmailId();
            expect(loginAction.type).to.equal(LoginActionTypes.GET_EMAILID_TYPE);
        });
    });
});
