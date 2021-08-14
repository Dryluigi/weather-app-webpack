import 'regenerator-runtime';
import './style/index.scss';
import './components/header-info';
import './components/header-weather';
import './components/weather-forecast';
import './scripts/search-handler';

require.context('./assets/images/weather-icons', false, /\.png$/);