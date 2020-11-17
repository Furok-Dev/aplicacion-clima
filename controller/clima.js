/* eslint-disable consistent-return */
const axios = require('axios');

const API_KEY = '2fa865b3cdf9178a618fd9a38ade00fb';

const getClima = async (city) => {
  let responseerr;
  try {
    const URI = encodeURI(city);
    const response = await axios.get(
      // eslint-disable-next-line comma-dangle
      `http://api.openweathermap.org/data/2.5/weather?q=${URI}&appid=${API_KEY}`
    );
    const { temp: temperatura } = await response.data.main;
    return temperatura;
  } catch (err) {
    // responseerr = err.response.data.cod;
    // return responseerr;
    console.error(new Error('Funciona por favor'));
  }
};

const temperaturaEnCelsius = (fahrenheitTemp) => {
  const formulaCelsius = ((fahrenheitTemp - 32) * 5) / 9;
  return formulaCelsius;
};

module.exports = {
  getClima,
};
