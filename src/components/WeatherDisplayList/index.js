import React, {Component} from 'react'
import PropTypes from 'prop-types'
import WeatherDisplay from '../WeatherDisplay'

class WeatherDisplayList extends Component {

    static propTypes = {
        weather: PropTypes.array.isRequired
    };

    render() {
        const {weather} = this.props;
        const weatherElements = this.props.weather.map(weather =>
        <li key={weather.id}>
            <WeatherDisplay weather={weather}/>
        </li>);

        return (
        <ul>
            {weatherElements}
        </ul>
        )
    }

}

export default WeatherDisplayList



