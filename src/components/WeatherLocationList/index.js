import React, {Component} from 'react'
import PropTypes from 'prop-types'
import WeatherLocation from '../WeatherLocation'
import {connect} from 'react-redux'
import {weatherSelector} from '../../selectors'
import {getLocationCoords} from '../../AC'
import Loader from '../Loader'

class WeatherLocationList extends Component {

    static propTypes = {
        weather: PropTypes.array.isRequired
    };

    componentDidMount() {
        const {loaded, loading, getLocationCoords} = this.props;
        if(!loaded && !loading) getLocationCoords()
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
}),{getLocationCoords})(WeatherLocationList)



