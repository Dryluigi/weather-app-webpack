import moment from "moment";
import getImage from "../image/image-getter";

const updateHeaderWeather = (weather) => {
  const weatherHeader = document.querySelector('header-weather');

  const processedData = {
    temp: Math.round(weather.temp),
    weatherDescription: weather.weather[0].main,
    wind: weather.wind_speed,
    sunrise: moment.unix(weather.sunrise).format('H:mm'),
    sunset: moment.unix(weather.sunset).format('H:mm'),
    humidity: weather.humidity,
    clouds: weather.clouds,
    pressure: weather.pressure,
    image: getImage(weather.weather[0].id),
  };

  weatherHeader.weather = processedData;
};

export default updateHeaderWeather;