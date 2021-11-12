import { Component } from 'react';

// Import data for API access
import { citiesId, loadingDataFromServer } from '../../../data-for-api';

// Import of components
import Header from '../../header/header';
import WeatherData from '../../weather-data/weather-data';
import WeatherForDays from '../../weather-for-days/weather-for-days';

import './home.scss';

class Home extends Component {
    // Private variable initialization
    // ID of the previous selected city (initially "null")
    #prevIdSelectedCity = null;
    // Number of days
    #numberOfDays = 3;

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

    // Updating weather forecast data for a selected city
    updateIdSelectedCity = (value) => {
        this.setState({
            idSelectedCity: value
        });
        localStorage.setItem('idSelectedCity', value);
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
        this.#prevIdSelectedCity = this.state.idSelectedCity;
    }

    componentDidUpdate() {
        if (this.#prevIdSelectedCity !== this.state.idSelectedCity) {
            loadingDataFromServer(this.state.idSelectedCity, this.updateBasicWeatherInformation);
            this.#prevIdSelectedCity = this.state.idSelectedCity;
        }
    }

    render() {
        const numberOfDays = this.#numberOfDays;

        const name = this.state.name;
        const temp = this.state.temp;
        const description = this.state.weatherDescription;
        const date = this.state.dt;

        return (
            <div className="home-block">
                <Header name={name} updateIdSelectedCity={this.updateIdSelectedCity} />
                <WeatherData temp={temp} description={description} />
                <WeatherForDays temp={temp} description={description} date={date} numberOfDays={numberOfDays} />
            </div>
        );
    }
}

export default Home;