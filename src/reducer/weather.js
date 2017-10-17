import {} from '../constants'
import {weather as defaultWeather} from '../fixtures'

export default (weather = defaultWeather, action) => {
    const {type} = action;

    switch (type) {

    }

    return weather
}