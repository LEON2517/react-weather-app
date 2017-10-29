import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteLocation} from '../../AC'
import CSSTransion from 'react-addons-css-transition-group'
import './style.css'


class WeatherLocation extends Component {

    static propTypes = {
        weather: PropTypes.shape({
            name: PropTypes.string,
            sys: PropTypes.shape({
                country: PropTypes.string
            }),
            main: PropTypes.shape({
                pressure: PropTypes.number,
                humidity: PropTypes.number
            })
        }).isRequired
    };


    render() {
        const { weather } = this.props;

        return (
            <div className = "container-weather-location">
                <CSSTransion
                    transitionName="weather"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppearTimeout={500}
                    transitionAppear
                    component="section"
                >
                    <div className={this.getClassName()}>

                            <h1>{weather.name} | {weather.sys.country}</h1>
                            <h2>{Math.round(weather.main.temp)} &#176;C</h2>


                            <p>pressure: {weather.main.pressure}</p>
                            <p>humidity: {weather.main.humidity}</p>
                            <p>description: {weather.weather[0].description}</p>

                        <button onClick={this.handleDelete}
                                className="button-delete">DELETE</button>
                    </div>
                </CSSTransion>
            </div>
        )
    }

    handleDelete = () => {
        const {deleteLocation, weather} = this.props;
        deleteLocation(weather.id)
    };

    getClassName() {
        const {weather} = this.props;
        const code = weather.weather[0].id;
        console.log('code:', code);

        if (code >= 200 && code < 300) {
            return 'thunderstorm';
        } else if (code >= 300 && code < 400) {
            return 'drizzle';
        } else if (code >= 500 && code < 600) {
            return 'rain';
        } else if (code >= 600 && code < 700) {
            return 'snow';
        } else if (code >= 700 && code < 800) {
            return 'atmosphere';
        } else if (code  === 800) {
            return 'clear';
        } else if (code >= 801 && code < 900) {
            return 'clouds';
        } else if (code >= 900 && code < 907) {
            return 'extreme';
        } else if (code >= 907 && code < 1000) {
            return 'additional';
        } else {
            return 'unknown';
        }
    }
}

export default connect(null,{deleteLocation})(WeatherLocation)