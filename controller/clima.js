/* eslint-disable consistent-return */
const axios = require('axios');

const API_KEY = '2fa865b3cdf9178a618fd9a38ade00fb';

const getDataClime = city => {
  const URI = encodeURI(city);

  return new Promise((resolve, reject) => {
    const dataClime = axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${URI}&appid=${API_KEY}`,
    );
    resolve(dataClime);
  });
};

const getClime = async city => {
  try {
    const data = await getDataClime(city);
    const temperatura = data.data.main.temp;
    const convertedCelciousTemp = temperatura - 273.15;
    const celciousTemp = convertedCelciousTemp.toFixed(2);
    console.log(`La temperatura en ${city} es de ${celciousTemp}°C`);
  } catch (error) {
    console.error(`La ciudad ${city} no existe`);
    // console.log(error);
  }
};

module.exports = {
  getClime,
};
