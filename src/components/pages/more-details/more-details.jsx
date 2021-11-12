import { Component } from 'react';

import { citiesId, loadingDataFromServer } from '../../../data-for-api';

import CitySearch from '../../city-search/city-search';
import CityName from '../../city-name/city-name';
import WeatherData from '../../weather-data/weather-data';
import WeatherForDays from '../../weather-for-days/weather-for-days';

import './more-details.scss';

class MoreDetails extends Component {
    // Number of days
    #numberOfDays = 5;

    constructor(props) {
        super(props);
        this.state = {
            // Basic weather information
            name: '-',
            temp: [],
            weatherDescription: [],
            dt: [],
            // Selected default city (by default for the city of "Minsk")
            // If the user has selected a different city, then after reloading 
            // the page, thanks to "localStorage", the selected city will remain the same
            idSelectedCity: localStorage.getItem('idSelectedCity') ? localStorage.getItem('idSelectedCity') : citiesId.idMinsk
        }
    }

    // Updating basic weather information
    updateBasicWeatherInformation = (name1, temp1, weatherDescription1, dt1) => {
        this.setState({
            name: name1,
            temp: temp1,
            weatherDescription: weatherDescription1,
            dt: dt1
        });
    }

    // Component life cycle
    componentDidMount() {
        loadingDataFromServer(this.state.idSelectedCity, this.updateBasicWeatherInformation);
    }

    render() {
        const numberOfDays = this.#numberOfDays;

        const name = this.state.name;
        const temp = this.state.temp;
        const description = this.state.weatherDescription;
        const date = this.state.dt;

        return (
            <div className="more-details-block" >
                <CitySearch />
                <CityName name={name} />
                <WeatherData temp={temp} description={description} />
                <WeatherForDays temp={temp} description={description} date={date} numberOfDays={numberOfDays} />
            </div>
        );
    }
};

export default MoreDetails;