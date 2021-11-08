import './weather-data.scss';

const WeatherData = () => {
    return (
        <div className="weather-data-container">
            <p className="degrees-text">8<span>°</span></p>
            <p className="weather-status">Облачно</p>
        </div>
    );
}

export default WeatherData;