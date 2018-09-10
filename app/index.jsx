import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { createCookieMiddleware } from 'redux-cookie';
import Cookies from 'js-cookie';
import allReducers from './reducers';
import App from './App';
import './fonts.scss';
import './Style.scss';

const store = createStore(allReducers, applyMiddleware(logger, createCookieMiddleware(Cookies)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
