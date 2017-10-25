import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import weather from './weather'

export default combineReducers({
    weather,
    router
})