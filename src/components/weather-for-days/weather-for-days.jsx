import WeatherForDaysOneValue from '../weather-for-days-one-value/weather-for-days-one-value';

import './weather-for-days.scss';

const WeatherForDays = ({ temp, description, date, numberOfDays }) => {
    const listOfWeatherValues = [];

    if (temp && description && date && numberOfDays) {
        for (let i = 0; i < numberOfDays; i++) {
            listOfWeatherValues[i] = <WeatherForDaysOneValue key={i + 1} temp={temp[i]} description={description[i]} date={date[i]} i={i} />;
        }
    }

    return (
        <div className="weather-for-days-container" >
            {listOfWeatherValues}
        </div>
    );
}

export default WeatherForDays;