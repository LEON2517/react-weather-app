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
                <h3>{weather.get('name')},{weather.getIn(['sys','country'])}</h3>
                <ul>
                    <li>{weather.getIn(['main','temp'])}</li>
                    <li>{weather.getIn(['main','pressure'])}</li>
                    <li>{weather.getIn(['main','humidity'])}</li>
                </ul>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }

    handleDelete = () => {
        const {deleteArticle, weather} = this.props;
        deleteArticle(weather.get('id'))
    }
}


export default connect(null,{deleteArticle})(WeatherDisplay)