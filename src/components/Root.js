import React, {Component} from 'react'
import WeatherDisplay from './WeatherDisplay'
import {weather} from '../fixtures'



export default class Root extends Component {
    render() {
        return (
            <div>
                <h1>React Weather App</h1>
                <WeatherDisplay weather = {weather[0]}/>
            </div>
        )
    }
}