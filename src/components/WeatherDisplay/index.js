import React from 'react'

export default function WeatherForm(props) {
    const {weather} = props;
    return (
        <div>
            <h3>{weather.name},{weather.sys.country}</h3>
            {weather.main.temp}
        </div>
    )
}