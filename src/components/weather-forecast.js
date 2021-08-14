import './forecast-item';

class WeatherForecast extends HTMLElement {
  set forecasts(forecasts) {
    this._forecasts = forecasts;
    this.render();
  }

  render() {
    this.classList.add('weather-list');
    this.innerHTML = '';
    this._forecasts.map((forecast, index) => {
      const forecastItem = document.createElement('forecast-item');
      forecastItem.setAttribute('style', `--delay-factor: ${index}`)
      forecastItem.forecast = forecast;
      this.appendChild(forecastItem);
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ['forecasts'];
  }
}

customElements.define('weather-forecast', WeatherForecast);