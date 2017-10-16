import React, {Component} from 'react'

class WeatherDisplay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

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