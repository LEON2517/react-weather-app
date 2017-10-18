import { DELETE_WEATHERDISPLAY } from '../constants'
import {weather as defaultWeather} from '../fixtures'
//import {Map} from 'immutable'

//const defaultState = new Map(defaultWeather);

export default (weather = defaultWeather, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_WEATHERDISPLAY:
            return weather.filter(weather => weather.id !== payload.id)
    }
    return weather
}