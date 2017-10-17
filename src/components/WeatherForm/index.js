import React, {Component} from 'react'
import WeatherDisplayList from '../WeatherDisplayList'

class WeatherForm extends Component {

    state = {
        value: ''
    };

    render() {
        const {weather} = this.props;
        return (
            <div>
                <form>
                    <input value = {this.state.value}/>
                    <input type = "submit"
                           value = "submit"/>
                </form>
                <WeatherDisplayList weather = {weather}/>
            </div>
        )
    }
}

export default WeatherForm