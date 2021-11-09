import './weather-for-days.scss';

const WeatherForDays = ({ temp, description }) => {
    return (
        <div className="weather-for-days-container">
            <div className="today">
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
            </div>
        </div>
    );
};

export default WeatherForDays;