const axios = require('axios');
const colorsConf = require('../utils/colorsconf');

const API_KEY = '2fa865b3cdf9178a618fd9a38ade00fb';
const TEMPERATURE = {
  caliente: 24,
  comoda: 18,
  fresca: 13,
  fria: 5,
};

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
    console.log(`La temperatura en ${city.warn} es de ${celciousTemp.warn}°C`);

    if (celciousTemp >= TEMPERATURE.caliente) {
      console.log(`Una temperatura de ${celciousTemp}°C se considera caliente`.caliente);
    } else if (celciousTemp >= TEMPERATURE.comoda && celciousTemp < TEMPERATURE.caliente) {
      console.log(`Una temperatura de ${celciousTemp}°C se considera comoda`.comoda);
    } else if (celciousTemp >= TEMPERATURE.fresca && celciousTemp < TEMPERATURE.comoda) {
      console.log(`Una temperatura de ${celciousTemp}°C se considera fresca`.fresca);
    } else if (celciousTemp < TEMPERATURE.fria || celciousTemp < TEMPERATURE.fresca) {
      console.log(`Una temperatura de ${celciousTemp}°C se considera fria`.fria);
    }
  } catch (error) {
    console.error(`La ciudad ${city} no existe`.error);
  }
};

module.exports = {
  getClime,
};
