import React, {Component} from 'react'
import WeatherForm from './WeatherForm'
import {weather} from '../fixtures'


export default class Root extends Component {
    render() {
        return (
            <div>
                <h1>React Weather App</h1>
                <WeatherForm weather = {weather}/>
            </div>
        )
    }
}