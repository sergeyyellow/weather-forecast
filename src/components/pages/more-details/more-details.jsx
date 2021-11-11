import { Component } from 'react';

import { citiesId, apiKey } from '../../../data-for-api';

import CitySearch from '../../city-search/city-search';
import CityName from '../../city-name/city-name';
import WeatherData from '../../weather-data/weather-data';
import WeatherForDays from '../../weather-for-days/weather-for-days';

import './more-details.scss';

class MoreDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Basic weather information
            name: '-',
            temp: [],
            weatherDescription: [],
            // Selected default city (by default for the city of "Minsk")
            // If the user has selected a different city, then after reloading 
            // the page, thanks to "localStorage", the selected city will remain the same
            idSelectedCity: localStorage.getItem('idSelectedCity') ? localStorage.getItem('idSelectedCity') : citiesId.idMinsk
        }
    }

    // Requesting access to the weather forecast API
    loadingDataFromServer = () => {
        // Takes the passed string, and changes the first letter to uppercase, 
        // and all other letters to lowercase
        const capitalizeFirstLetter = (item) => {
            return item.charAt(0).toLocaleUpperCase() + item.slice(1).toLocaleLowerCase();
        };

        // We receive a forecast for three days by API (by default for the city of "Minsk")
        fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${this.state.idSelectedCity}&appid=${apiKey}&cnt=3`)
            .then(res => res.json())
            .then(data => {
                let tempArr = [];
                let weatherArr = [];

                for (let i in data.list) {
                    // Converts the transmitted number from Kelvin to Celsius
                    tempArr[i] = Math.round(data.list[i].main.temp - 273.15) + '';
                    weatherArr[i] = capitalizeFirstLetter(data.list[i].weather[0].description);
                }

                this.setState({
                    name: data.city.name,
                    temp: tempArr,
                    weatherDescription: weatherArr
                });
            });
    }

    componentDidMount() {
        this.loadingDataFromServer();
    }

    render() {
        const name = this.state.name;
        const temp = this.state.temp;
        const description = this.state.weatherDescription;

        return (
            <div className="more-details-block" >
                <CitySearch />
                <CityName name={name} />
                <WeatherData temp={temp} description={description} />
                <WeatherForDays temp={temp} description={description} />
            </div>
        );
    }
};

export default MoreDetails;