import React, {Component} from 'react'
import WeatherDisplayList from '../WeatherDisplayList'
import {connect} from 'react-redux'
import {weatherSelector} from '../../selectors'
import {loadAllWeather} from '../../AC'

class WeatherForm extends Component {

    state = {
        value: ''
    };

    componentDidMount() {
        this.props.loadAllWeather()
    }


    render() {
        console.log('---', 'rendering weather list')
        const {weather} = this.props;
        return (
            <div>
                <form>
                    <input value = {this.state.value}
                    onChange={this.handleChange}/>
                    <input type = "submit"
                           value = "submit"/>
                </form>
                <WeatherDisplayList weather={weather}/>
            </div>
        )
    }

    handleChange = ev => {
        this.setState({
            value: ev.target.value
        })
    }
}

export default connect(state => ({
    weather: weatherSelector(state)
}),{loadAllWeather})(WeatherForm)
