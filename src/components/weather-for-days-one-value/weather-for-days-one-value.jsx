import './weather-for-days-one-value.scss';

const WeatherForDaysOneValue = ({ temp, description }) => {
    return (
        <div className="weather-for-days-one-value">
            <p className="text">- · <span>{description ? description : '-'}</span></p>
            <p className="degrees">{temp ? temp : '-'}<span>°</span></p>
        </div>
    );
};

export default WeatherForDaysOneValue;