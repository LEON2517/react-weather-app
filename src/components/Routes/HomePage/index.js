import React, { Component } from 'react'
import WeatherForm from '../../WeatherForm'
import WeatherLocationList from '../../WeatherLocationList'
import './style.css'

class HomePage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div className="container-home-page">
                <WeatherForm />
                <WeatherLocationList />
            </div>
        );
    }
}

export default HomePage