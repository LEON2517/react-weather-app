import {createStore, compose, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reducer from '../reducer'
import callAPI from '../middlewares/callAPI'
import {routerMiddleware} from 'react-router-redux'
import history from '../history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(callAPI, routerMiddleware(history), logger));

const store = createStore(reducer, enhancer);
window.store = store;

export default store