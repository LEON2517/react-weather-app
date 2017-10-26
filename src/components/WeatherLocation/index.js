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
            <div className = {this.getClassName()}>
                <CSSTransion
                    transitionName="weather"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppearTimeout={500}
                    transitionAppear
                    component="section"
                >
                <h2 className="location">{weather.name} | {weather.sys.country}</h2>
                <ul>
                    <li className="temp"><h1>{Math.round(weather.main.temp)} &#176;C</h1></li>
                    <div className="main">
                        <li>pressure: {weather.main.pressure}</li>
                        <li>humidity: {weather.main.humidity}</li>
                        <li>description: {weather.weather[0].description}</li>
                    </div>
                </ul>
                <button onClick={this.handleDelete}>Delete</button>
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