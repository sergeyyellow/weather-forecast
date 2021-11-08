import './weather-for-days.scss';

const WeatherForDays = () => {
    return (
        <div className="weather-for-days-container">
            <div class="today">
            <p className="text">Сегодня · <span>Дождь</span></p>
            <p className="degrees">8<span>°</span></p>
            </div>

            <div class="tomorrow">
            <p className="text">Завтра · <span>Облачно</span></p>
            <p className="degrees">1<span>°</span></p>
            </div>

            <div class="day-after-tomorrow">
            <p className="text">Послезавтра · <span>Облачно</span></p>
            <p className="degrees">3<span>°</span></p>
            </div>
        </div>
    );
};

export default WeatherForDays;