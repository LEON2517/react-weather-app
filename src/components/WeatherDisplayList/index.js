import React from 'react'
import WeatherDisplay from '../WeatherDisplay'


function WeatherDisplayList(props) {
    const articleElements = props.weather.map(weather =>
        <li key={weather.id}>
            <WeatherDisplay weather={weather}/>
        </li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default WeatherDisplayList