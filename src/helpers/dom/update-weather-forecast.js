import '../../components/weather-forecast';
import moment from "moment";
import getImage from "../image/image-getter";

const updateWeatherForecast = (forecasts) => {
  const weatherForecast = document.querySelector('weather-forecast');
  const processedForecasts = forecasts.map(forecast => {
    return {
      day: moment.unix(forecast.dt).format('ddd'),
      date: moment.unix(forecast.dt).format('DD/M'),
      pressure: forecast.pressure,
      humidity: forecast.humidity,
      clouds: forecast.clouds,
      temp: Math.round(forecast.temp.day),
      image: getImage(forecast.weather[0].id),
    };
  });
  weatherForecast.forecasts = processedForecasts.slice(0, 5);
};

export default updateWeatherForecast;