import { getCityFromLocation } from './location';
import '../css/style.css';
import clear from '../images/clear.png';
import clouds from '../images/clouds.png';
import drizzle from '../images/drizzle.png';
import humidity from '../images/humidity.png';
import mist from '../images/mist.png';
import rain from '../images/rain.png';
import search from '../images/search.png';
import snow from '../images/snow.png';
import wind from '../images/wind.png';

const apiKey = "9728aefdb047afef74f257f4758a672b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const searchIcon = document.getElementById("searchIcon");
const humidityIcon = document.getElementById("humidityIcon");
const windIcon = document.getElementById("windIcon");
searchIcon.src = search;
humidityIcon.src = humidity;
windIcon.src = wind;

const weatherIcon = document.querySelector(".weather-icon");

weatherIcon.src = drizzle;

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data); // This will log the actual data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
        var temperature = data.main.temp;
        (temperature <= 0) ? weatherIcon.src = snow : (temperature > 40 ? weatherIcon.src = clear : weatherIcon.src = getResourceFromWeather(data.weather[0].main.toLowerCase()));

        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function getResourceFromWeather(weather) {
    switch (weather.toLowerCase) {
        case 'clouds':
            return clouds;
            break;
        case 'mist':
            return mist;
            break;
        case 'rain':
            return rain;
            break;
        default:
            return clouds;
    }
}

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        checkWeather(searchBox.value);
    }
});

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

//default city should be taken from the location
document.addEventListener("DOMContentLoaded", () => {


    getCityFromLocation().then(
        city => {
            checkWeather(city);
            console.log("Success got city from location : " + city);
        }
    );

});