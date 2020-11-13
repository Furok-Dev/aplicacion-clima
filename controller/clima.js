/* eslint-disable consistent-return */
const axios = require('axios');

const API_KEY = '2fa865b3cdf9178a618fd9a38ade00fb';

const getClima = async (city) => {
  try {
    const URI = encodeURI(city);
    const response = await axios.get(
      // eslint-disable-next-line comma-dangle
      `http://api.openweathermap.org/data/2.5/weather?q=${URI}&appid=${API_KEY}`
    );
    const { temp } = await response.data.main;
    return temp;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getClima,
};
