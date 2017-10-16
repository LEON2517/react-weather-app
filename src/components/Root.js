import React, {Component} from 'react'
import CityForm from './WeatherForm'
import WeatherDisplay from './WeatherDisplay'


export default class Root extends Component {
    render() {
        return (
            <div>
                <CityForm/>
            </div>
        )
    }
}