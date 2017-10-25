import React, { Component } from 'react'
import WeatherForm from '../WeatherForm'

class HomePage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>React Weather App</h1>
                <WeatherForm />
            </div>
        );
    }
}

export default HomePage