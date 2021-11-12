// API access data
export const citiesId = {
    idMinsk: 625144,
    idMoscow: 524901,
    idBratislava: 3060972
}

export const apiKey = "b9f6a12913d4ae40ea76f2c241721480";

// Requesting access to the weather forecast API
export const loadingDataFromServer = (id, updateBasicWeatherInformation) => {
    // Takes the passed string, and changes the first letter to uppercase, 
    // and all other letters to lowercase
    const capitalizeFirstLetter = (item) => {
        return item.charAt(0).toLocaleUpperCase() + item.slice(1).toLocaleLowerCase();
    };

    // We receive a forecast for three days by API (by default for the city of "Minsk")
    fetch(`http://api.openweathermap.org/data/2.5/forecast/?id=${id}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
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
                dtArr[i] = dailyData[i].dt;
            }

            return updateBasicWeatherInformation(data.city.name, tempArr, weatherArr, dtArr);
        });
}