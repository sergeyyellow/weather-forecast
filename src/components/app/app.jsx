import { Component } from 'react';

// Import data for API access
import { citiesId, apiKey } from '../../data-for-api.jsx';

// Import of components
import Header from '../header/header.jsx';
import WeatherData from '../weather-data/weather-data.jsx';
import WeatherForDays from '../weather-for-days/weather-for-days.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '-',
      temp: [],
      weatherDescription: []
    }
  }

  componentDidMount() {
    // Takes the passed string, and changes the first letter to uppercase, 
    // and all other letters to lowercase
    function capitalizeFirstLetter(item) {
      return item.charAt(0).toLocaleUpperCase() + item.slice(1).toLocaleLowerCase();
    }

    // We receive a forecast for three days by API (by default for the city of "Minsk")
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${citiesId.idMinsk}&appid=${apiKey}&cnt=3`)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        let tempArr = [];
        let weatherArr = [];
        for (let i in data.list) {
          // Converts the transmitted number from Kelvin to Celsius
          tempArr[i] = Math.round(data.list[i].main.temp - 273.15);
          weatherArr[i] = capitalizeFirstLetter(data.list[i].weather[0].description);
        }

        this.setState({
          name: data.city.name,
          temp: tempArr,
          weatherDescription: weatherArr
        });
      });
  }

  render() {
    const name = this.state.name,
      temp = this.state.temp,
      description = this.state.weatherDescription;

    return (
      <>
        <Header name={name} />
        <WeatherData temp={temp} description={description} />
        <WeatherForDays temp={temp} description={description} />
      </>
    );
  }
}

export default App;
