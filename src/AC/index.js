import { DELETE_LOCATION, GET_LOCATION_COORDS, ADD_LOCATION, GET_ICON } from '../constants'

export function deleteLocation(id) {
    return {
        type: DELETE_LOCATION,
        payload: { id }
    }
}

export function getLocationCoords() {
    return {
        type: GET_LOCATION_COORDS,
        //callAPI: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ad7ce277ead15b2f7e1bdc6f7e6b7f3b`
        callAPI: `http://api.openweathermap.org/data/2.5/weather?q=Sankt-Peterburg&units=metric&appid=ad7ce277ead15b2f7e1bdc6f7e6b7f3b` //заглушка
    }
}


export function addLocation(value) {
    return {
        type: ADD_LOCATION,
        callAPI: `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=ad7ce277ead15b2f7e1bdc6f7e6b7f3b`
    };
}
