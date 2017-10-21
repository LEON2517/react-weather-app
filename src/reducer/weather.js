import { DELETE_WEATHERDISPLAY, LOAD_ALL_WEATHER } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'
//import {weather as defaultWeather} from '../fixtures'

const WeatherRecord = Record({
    id: null,
    name: null,
    main: {},
    sys: {}
});

const defaultState = arrToMap([], WeatherRecord);

export default (state = defaultState, action) => {
    const { type, payload, response } = action;

    switch (type) {
        case DELETE_WEATHERDISPLAY:
            return state.delete(payload.id);

        case LOAD_ALL_WEATHER:
            return arrToMap(response, WeatherRecord)
    }
    return state
}