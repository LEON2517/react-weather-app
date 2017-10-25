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
            <div>
                <CSSTransion
                    transitionName="weather"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppearTimeout={500}
                    transitionAppear
                    component="section"
                >
                <h3>{weather.name},{weather.sys.country}</h3>
                <ul>
                    <li>Температура: {weather.main.temp}&#176;C</li>
                    <li>Давление: {weather.main.pressure}</li>
                    <li>Влажность: {weather.main.humidity}</li>
                    <li>Описание: {weather.weather[0].description}</li>
                </ul>
                <button onClick={this.handleDelete}>Delete</button>
                </CSSTransion>
            </div>
        )
    }

    handleDelete = () => {
        const {deleteLocation, weather} = this.props;
        deleteLocation(weather.id)
    }
}


export default connect(null,{deleteLocation})(WeatherLocation)