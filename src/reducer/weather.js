import { DELETE_WEATHERDISPLAY } from '../constants'
import {weather as defaultWeather} from '../fixtures'
import {arrToMap} from './utils'
import {Map, Record} from 'immutable'

const WeatherRecord = Record({
    id: null,
    name: null,
    main: {},
    sys: {},
});

const defaultState = new Map(arrToMap(defaultWeather, WeatherRecord));

export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_WEATHERDISPLAY:
            return state.delete(payload.id)
    }
    return state
}