import axios from "axios";
import config from '../../config/api.json';

const getCities = async (city) => {
  const { geodb } = config;
  let data = {};

  try {
    data = await axios({
      method: 'get',
      url: geodb.endpoints.cities,
      headers: {
        'X-Rapidapi-Key': geodb.key,
        'X-Rapidapi-Host': 'wft-geo-db.p.rapidapi.com',
      },
      params: {
        namePrefix: city,
        offset: 0,
        limit: 5,
      }
    });
  } catch (err) {
    console.log(err);
    data = {
      'error': 'Terjadi kesalahan!',
    }
  }

  return data;
};

export default getCities;