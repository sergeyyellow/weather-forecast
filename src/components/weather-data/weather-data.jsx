import './weather-data.scss';

const WeatherData = ({ temp, description }) => {
    return (
        <div className="weather-data-container">
            <div className="weather-data-block">
                <p className="degrees-text">{temp[0] ? temp[0] : '-'}</p>
            </div>
            <p className="weather-status">{description[0] ? description[0] : '-'}</p>
        </div>
    );
}

export default WeatherData;