import {createStore, compose, applyMiddleware} from 'redux'
import reducer from '../reducer'
import callAPI from '../middlewares/callAPI'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(callAPI));

const store = createStore(reducer, enhancer);
window.store = store;

export default store