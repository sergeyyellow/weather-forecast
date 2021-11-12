import './weather-for-days-one-value.scss';

const WeatherForDaysOneValue = ({ temp, description, date, i }) => {
    const arr = ['Today', 'Tomorrow', 'Day after tomorrow'];
    const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let text;
    let currentDate = new Date();

    if (temp && description && date) {
        if (i === 0) {
            text = arr[0];
        } else if (i === 1) {
            text = arr[1];
        } else if (i === 2) {
            text = arr[2];
        } else {
            currentDate.setTime(date + '000');
            text = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()} (${daysArr[currentDate.getDay()]})`;
        }
    }

    return (
        <div className="weather-for-days-one-value">
            <p className="text">{text ? text : '-'} · <span>{description ? description : '-'}</span></p>
            <p className="degrees">{temp ? temp : '-'}<span>°</span></p>
        </div>
    );
};

export default WeatherForDaysOneValue;