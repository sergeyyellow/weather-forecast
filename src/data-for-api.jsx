// API access data
export const citiesId = {
    idMinsk: 625144,
    idMoscow: 524901,
    idBratislava: 3060972
}

// API key
export const apiKey = "73c041fb68c2408f6ab83fc012628489";

// Requesting access to the weather forecast API
export const loadingDataFromServer = (id, updateWeatherInformation) => {
    // Takes the passed string, and changes the first letter to uppercase, 
    // and all other letters to lowercase
    const capitalizeFirstLetter = (item) => {
        return item.charAt(0).toLocaleUpperCase() + item.slice(1).toLocaleLowerCase();
    };

    // We receive a forecast by API (by default for the city "Minsk")
    fetch(`http://api.openweathermap.org/data/2.5/forecast/?id=${id}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            // The filter writes to the variable only the data that is oriented towards the time 18:00:00. 
            // There will be 5 total values because the API provides for free only up to 5 days of an open forecast.
            const dailyData = data.list.filter(item => item.dt_txt.includes("18:00:00"));

            let tempArr = [];
            let weatherArr = [];
            let dtArr = [];

            for (let i in dailyData) {
                // Converts the transmitted number from Kelvin to Celsius
                tempArr[i] = Math.round(dailyData[i].main.temp - 273.15) + '';
                weatherArr[i] = capitalizeFirstLetter(dailyData[i].weather[0].description);
                // dt - date in milliseconds
                dtArr[i] = dailyData[i].dt;
            }

            return updateWeatherInformation(data.city.name, tempArr, weatherArr, dtArr);
        });
}

// Getting hourly forecast data
export const gettingHourlyForecastData = (id, updateData) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast/?id=${id}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            let tempArr = [];
            let dtArr = [];

            // Setting the current time in the format "yyyy-mm-dd"
            const currentTime = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
            // A new variable that will store an array with data for the current day
            const newDataList = data.list.filter(item => item.dt_txt.includes(`${currentTime}`));

            for (let i in newDataList) {
                // Converts the transmitted number from Kelvin to Celsius
                tempArr[i] = Math.round(newDataList[i].main.temp - 273.15) + '';
                // The variable "dt_txt" contains the date in the format "yyyy-mm-dd hh:mm:ss". 
                // From this variable I get data in the "hh:mm" format thanks to the "replace()" 
                // method and the "substr()" method.
                dtArr[i] = (newDataList[i].dt_txt.replace(`${currentTime} `, '')).substr(0, 5);
            }

            return updateData(tempArr, dtArr);
        });
}