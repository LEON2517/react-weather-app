import { DELETE_WEATHERDISPLAY } from '../constants'
import {weather as defaultWeather} from '../fixtures'
import {arrToMap} from './utils'
import {fromJS} from 'immutable'

const defaultState = new fromJS(defaultWeather);

export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_WEATHERDISPLAY:
            return state.delete(payload.id)
    }
    return state
}