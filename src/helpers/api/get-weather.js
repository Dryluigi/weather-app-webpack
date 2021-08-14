import axios from "axios";
import config from '../../config/api.json';

const getWeather = async (lat, lon) => {
  const { openweather } = config;
  let data = {};

  try {
    data = await axios({
      url: openweather.endpoints.onecall,
      params: {
        lat,
        lon,
        exclude: "",
        appid: openweather.key,
        units: 'metric',
      },
    });
  } catch (err) {
    console.log(err);
    data = {
      error: "Terjadi kesalahan!",
    };
  }

  return data;
};

export default getWeather;