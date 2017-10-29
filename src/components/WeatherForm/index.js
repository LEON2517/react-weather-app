import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addLocation} from '../../AC'
import './style.css'

class WeatherForm extends Component {

    state = {
        value: ''
    };


    render() {

        return (
            <div className="container-weather-form">
                <h1>React Weather App</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.value}
                               onChange={this.handleChange}
                               className="form-input"
                               placeholder="Start typing your location"/>
                        <input type="submit"
                               value="ADD CITY"
                               className="form-submit"/>
                    </form>
            </div>
        )
    }


    handleSubmit = ev => {
        ev.preventDefault();
        this.props.addLocation(this.state.value);
        this.setState({
            value: ''
        })
    };

    handleChange = ev => {
        this.setState({
            value: ev.target.value
        })
    };
}


export default connect(null, (dispatch) => ({
    addLocation: (value) => dispatch(addLocation(value)),
}))(WeatherForm)
