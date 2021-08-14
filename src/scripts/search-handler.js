import getCities from "../helpers/api/get-cities";
import getWeather from "../helpers/api/get-weather";
import updateHeaderInfo from "../helpers/dom/update-header-info";
import updateHeaderWeather from "../helpers/dom/update-header-weather";
import updateWeatherForecast from "../helpers/dom/update-weather-forecast";
import controlStatus from "../helpers/dom/control-status";

const searchHandler = async (event) => {
  event.preventDefault();
  const searchInput = document.querySelector('.weather-search input');

  if (searchInput.value.trim().length < 1) {
    return;
  }

  try {
    controlStatus('loading');
    const cities = await getCities(searchInput.value);
  
    if (cities.status === 200) {
      if (cities.data.data.length > 0) {
        const selectedCity = cities.data.data[0];
        const weather = await getWeather(
          selectedCity.latitude, 
          selectedCity.longitude
        );
          
        controlStatus('found');
        updateHeaderInfo(selectedCity.city, selectedCity.country);
        updateHeaderWeather(weather.data.current);
        updateWeatherForecast(weather.data.daily);
      } else {
        controlStatus('not_found');
      }
    } else {
      controlStatus('error');
    }
  } catch (err) {
    controlStatus('error');
  }
};

const form = document.querySelector('.weather-search');
form.addEventListener('submit', searchHandler);