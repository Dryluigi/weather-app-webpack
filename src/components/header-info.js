import '../style/components/header-info.scss';

class HeaderInfo extends HTMLElement {
  set city(city) {
    this._city = city;
    this.render;
  }

  set country(country) {
    this._country = country;
    this.render;
  }

  set date(date) {
    this._date = date;
    this.render;
  }

  render() {
    this.innerHTML = `
      <h1 class="city" style="--delay-factor: 0">${this._city}, ${this._country}</h1>
      <p class="date" style="--delay-factor: 1">${this._date}</p>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ['city', 'country', 'date'];
  }
}

customElements.define('header-info', HeaderInfo);