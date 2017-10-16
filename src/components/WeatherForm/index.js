import React from 'react'

export default function WeatherForm(props) {
    const {weather} = props;
    return (
        <div>
            <h3>{weather.name}</h3>
        </div>
    )
}