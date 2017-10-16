import React, {Component} from 'react'
import WeatherDisplayList from './WeatherDisplayList'
import {weather} from '../fixtures'


export default class Root extends Component {
    render() {
        return (
            <div>
                <h1>React Weather App</h1>
                <WeatherDisplayList weather = {weather}/>
            </div>
        )
    }
}