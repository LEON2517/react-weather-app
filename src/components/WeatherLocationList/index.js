import React, {Component} from 'react'
import PropTypes from 'prop-types'
import WeatherLocation from '../WeatherLocation'
import {connect} from 'react-redux'
import {weatherSelector} from '../../selectors'
import {getLocationCoords, addIcon} from '../../AC'
import Loader from '../Loader/index.js'
import './style.css'

class WeatherLocationList extends Component {

    static propTypes = {
        weather: PropTypes.array.isRequired
    };

    componentDidMount() {
        const {loaded, loading, getLocationCoords, addIcon} = this.props;
        if(!loaded && !loading) getLocationCoords() && addIcon()
    }


    render() {
        const { weather, loading } = this.props;
        const weatherElements = weather.map(weather =>
        <li key={weather.id}>
            <WeatherLocation weather={weather}/>
        </li>);

        if(loading) return <Loader/>;

        return (
        <ul>
            {weatherElements}
        </ul>
        )
    }
}


export default connect(state => ({
    weather: weatherSelector(state),
    loading: state.weather.loading,
    loaded: state.weather.loaded
}),{getLocationCoords, addIcon})(WeatherLocationList)



