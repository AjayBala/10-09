import * as LoginActionTypes from '../actionTypes/LoginActionTypes';

export const loginValues = values => ({
    type: LoginActionTypes.GET_LOGIN_VALUES_TYPE,
    payload: values,
});

export const getEmailId = values => ({
    type: LoginActionTypes.GET_EMAILID_TYPE,
    payload: values,
});

export default {
    loginValues,
    getEmailId,
};
