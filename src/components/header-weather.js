import '../style/components/header-weather.scss';

class HeaderWeather extends HTMLElement {
  set weather(weather) {
    this._weather = weather;
    this.render();
  }

  render() {
    const {
      temp,
      weatherDescription,
      wind,
      sunrise,
      sunset,
      humidity,
      clouds,
      pressure,
      image
    } = this._weather;
    const displayImage = require(`../assets/images/weather-icons/${image}`)

    this.classList.add('header-weather');
    this.innerHTML = `
      <div class="header-weather__highlight">
        <img src=${displayImage} alt="weather_illustration" style="--delay-factor: 0">
        <div class="weather">
          <h2 style="--delay-factor: 1">${temp}°</h2>
          <p style="--delay-factor: 2">${weatherDescription}</p>
        </div>
      </div>  
      <div class="separator"></div>
      <div class="header-weather__detail">
        <div style="--delay-factor: 3">
          <h4>${wind}m/s</h4>
          <p>Wind</p>
        </div>
        <div style="--delay-factor: 4">
          <h4>${clouds}%</h4>
          <p>Clouds</p>
        </div>
        <div style="--delay-factor: 5">
          <h4>${sunrise}</h4>
          <p>Sunrise</p>
        </div>
        <div style="--delay-factor: 3">
          <h4>${pressure}hPa</h4>
          <p>Pressure</p>
        </div>
        <div style="--delay-factor: 4">
          <h4>${humidity}%</h4>
          <p>Humidity</p>
        </div>
        <div style="--delay-factor: 5">
          <h4>${sunset}</h4>
          <p>Sunset</p>
        </div>
      </div>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ['weather'];
  }
}

customElements.define('header-weather', HeaderWeather);