import WeatherForDaysOneValue from '../weather-for-days-one-value/weather-for-days-one-value';

import './weather-for-days.scss';

const WeatherForDays = ({ temp, description }) => {
    const listOfWeatherValues = [];

    for (let i = 0; i < temp.length; i++) {
        listOfWeatherValues[i] = <WeatherForDaysOneValue key={i + 1} temp={temp[i]} description={description[i]} />;
    }

    return (
        <div className="weather-for-days-container" >
            {/* <div className="today">
                <p className="text">Today · <span>{description[0] ? description[0] : '-'}</span></p>
                <p className="degrees">{temp[0] ? temp[0] : '-'}<span>°</span></p>
            </div>

            <div className="tomorrow">
                <p className="text">Tomorrow · <span>{description[1] ? description[1] : '-'}</span></p>
                <p className="degrees">{temp[1] ? temp[1] : '-'}<span>°</span></p>
            </div>

            <div className="day-after-tomorrow">
                <p className="text">Day after tomorrow · <span>{description[2] ? description[2] : '-'}</span></p>
                <p className="degrees">{temp[2] ? temp[2] : '-'}<span>°</span></p>
            </div> */}
            {/* <WeatherForDaysOneValue temp={temp[0]} description={description[0]} />
            <WeatherForDaysOneValue temp={temp[1]} description={description[1]} />
            <WeatherForDaysOneValue temp={temp[2]} description={description[2]} /> */}

            {listOfWeatherValues}
        </div>
    );
}

export default WeatherForDays;