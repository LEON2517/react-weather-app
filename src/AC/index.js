import { DELETE_WEATHER, LOAD_ALL_WEATHER, ADD_LOCATION } from '../constants'

export function deleteWeather(id) {
    return {
        type: DELETE_WEATHER,
        payload: { id }
    }
}

export function loadAllWeather() {
    return {
        type: LOAD_ALL_WEATHER,
        callAPI: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=ad7ce277ead15b2f7e1bdc6f7e6b7f3b`
    }
}

export function addLocation(value) {
    return {
        type: ADD_LOCATION,
        callAPI: `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=ad7ce277ead15b2f7e1bdc6f7e6b7f3b`
    };
}

