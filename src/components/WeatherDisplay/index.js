import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC'

class WeatherDisplay extends Component {

    static propTypes = {
        weather: PropTypes.shape({
            name: PropTypes.string,
            sys: PropTypes.shape({
                country: PropTypes.string
            }),
            main: PropTypes.shape({
                pressure: PropTypes.string,
                humidity: PropTypes.string
            })
        }).isRequired
    };


    render() {
        const { weather } = this.props;
        return (
            <div>
                <h3>{weather.name},{weather.sys.country}</h3>
                <ul>
                    <li>{weather.main.temp}</li>
                    <li>{weather.main.pressure}</li>
                    <li>{weather.main.humidity}</li>
                </ul>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }

    handleDelete = () => {
        const {deleteArticle, weather} = this.props;
        deleteArticle(weather.id)
    }
}


export default connect(null,{deleteArticle})(WeatherDisplay)