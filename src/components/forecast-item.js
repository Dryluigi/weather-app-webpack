import '../style/components/forecast-item.scss';

class ForecastItem extends HTMLElement {
  set forecast(forecast) {
    this._forecast = forecast;
    this.render();
  }

  render() {
    const {
      day,
      date,
      temp,
      clouds,
      pressure,
      humidity,
      image,
    } = this._forecast;
    const myimage = require(`../assets/images/weather-icons/${image}`);

    this.classList.add('weather-card-long');
    this.innerHTML = `
      <div class="weather-property">
        <p class="weather-property__value">${date}</p>
        <p class="weather-property__key">${day}</p>
      </div>
      <img src=${myimage} alt="weather_illustration">
      <div class="weather-property">
        <p class="weather-property__value">${temp}°</p>
          <p class="weather-property__key">Temp</p>
      </div>
      <div class="weather-property">
        <p class="weather-property__value">${clouds}%</p>
        <p class="weather-property__key">Clouds</p>
      </div>
      <div class="weather-property">
        <p class="weather-property__value">${pressure}hPa</p>
        <p class="weather-property__key">Pressure</p>
      </div>
      <div class="weather-property">
        <p class="weather-property__value">${humidity}%</p>
        <p class="weather-property__key">Humid</p>
      </div>
    `;
  }
}

customElements.define('forecast-item', ForecastItem);