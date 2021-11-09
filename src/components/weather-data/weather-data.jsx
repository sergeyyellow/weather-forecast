import './weather-data.scss';

const WeatherData = ({ temp, description }) => {
    return (
        <div className="weather-data-container">
            <p className="degrees-text">{Math.round(temp - 273.15)}<span>°</span></p>
            <p className="weather-status">{description.toLocaleUpperCase()}</p>
        </div>
    );
}

export default WeatherData;