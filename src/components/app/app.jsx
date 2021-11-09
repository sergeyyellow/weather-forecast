import { Component } from 'react';

import Header from '../header/header.jsx';
import WeatherData from '../weather-data/weather-data.jsx';
import WeatherForDays from '../weather-for-days/weather-for-days.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '-',
      temp: '-',
      weatherDescription: '-'
    }
  }

  componentDidMount() {
    const citiesId = {
      idMinsk: 625144,
      idMoscow: 524901,
      idBratislava: 3060972
    }
    const apiKey = "b9f6a12913d4ae40ea76f2c241721480";

    // Today
    let today = new Date();
    today = (Date.parse(today) + '').slice(0, 10);
    console.log('Today: ' + today);

    // Tomorrow
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow = (Date.parse(tomorrow) + '').slice(0, 10);
    console.log('Tomorrow: ' + tomorrow);

    // Day after tomorrow
    let dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    dayAfterTomorrow = (Date.parse(dayAfterTomorrow) + '').slice(0, 10);
    console.log('Day after tomorrow: ' + dayAfterTomorrow);

    // weather = 1
    // forecast = list [40]
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${citiesId.idMinsk}&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          name: data.name,
          temp: data.main.temp,
          weatherDescription: data.weather[0].description
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
        <WeatherForDays />
      </>
    );
  }
}

export default App;
