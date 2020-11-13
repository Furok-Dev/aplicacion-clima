const axios = require('axios');

const API_KEY = '2fa865b3cdf9178a618fd9a38ade00fb';

const getClima = async (city) => {
  try {
    const URI = encodeURI(city);
    const response = await axios.get(
      `api.openweathermap.org/data/2.5/weather?q=${URI}&appid=${API_KEY}`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getClima,
};
