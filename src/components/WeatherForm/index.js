import React, {Component} from 'react'
import WeatherDisplayList from '../WeatherDisplayList'
import {connect} from 'react-redux'
import {addLocation} from '../../AC'


class WeatherForm extends Component {

    state = {
        value: ''
    };

    render() {

        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input value = {this.state.value}
                    onChange={this.handleChange}/>
                    <input type = "submit" value = "submit"/>
                </form>
                <WeatherDisplayList/>
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
    }
}


export default connect(null, (dispatch) => ({
    addLocation: (value) => dispatch(addLocation(value))
}))(WeatherForm)
