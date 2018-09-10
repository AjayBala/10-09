import { combineReducers } from 'redux';
import { reducer as forms } from 'redux-form';
import LoginReducer from './LoginReducer';

const allReducers = combineReducers({
    login: LoginReducer,
    form: forms,
});
export default allReducers;
