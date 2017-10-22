import React, {Component} from 'react'
import PropTypes from 'prop-types'
import WeatherDisplay from '../WeatherDisplay'
import {connect} from 'react-redux'
import {weatherSelector} from '../../selectors'
import {loadAllWeather} from '../../AC'
import Loader from '../Loader'

class WeatherDisplayList extends Component {

    static propTypes = {
        weather: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.loadAllWeather()
    }


    render() {
        const { weather, loading } = this.props;
        const weatherElements = weather.map(weather =>
        <li key={weather.id}>
            <WeatherDisplay weather={weather}/>
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
}),{loadAllWeather})(WeatherDisplayList)



