import React from 'react'
import WeatherDisplay from '../WeatherDisplay'

function WeatherDisplayList(props) {
    return (
        <ul>
            <li><WeatherDisplay weather = {props.weather[0]}/></li>
            <li><WeatherDisplay weather = {props.weather[0]}/></li>
            <li><WeatherDisplay weather = {props.weather[0]}/></li>
        </ul>
    )
}

export default WeatherDisplayList