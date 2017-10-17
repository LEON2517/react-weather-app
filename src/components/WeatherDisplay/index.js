import React, {Component} from 'react'
import PropTypes from 'prop-types'

class WeatherDisplay extends Component {

    static propTypes = {
        weather: PropTypes.shape({
            name: PropTypes.string,
            sys: PropTypes.object,
            main: PropTypes.object
        }).isRequired
    };

    render() {
        const {weather} = this.props;
        return (
            <div>
                <h3>{weather.name},{weather.sys.country}</h3>
                {weather.main.temp}
                {weather.main.pressure}
                {weather.main.humidity}
            </div>
        )
    }
}

export default WeatherDisplay