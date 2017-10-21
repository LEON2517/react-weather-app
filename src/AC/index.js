import { DELETE_WEATHERDISPLAY, LOAD_ALL_WEATHER } from '../constants'

export function deleteArticle(id) {
    return {
        type: DELETE_WEATHERDISPLAY,
        payload: { id }
    }
}

export function loadAllWeather() {
    return {
        type: LOAD_ALL_WEATHER,
        callAPI: `http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=ad7ce277ead15b2f7e1bdc6f7e6b7f3b`
    }
}