const { getClime } = require('./controller/clima');
const colorsConf = require('./utils/colorsconf.js');

// eslint-disable-next-line import/order
const { argv } = require('yargs').options({
  ciudad: {
    alias: 'c',
    desc: 'Nombre de la ciudad para obtener el clima',
    demand: true,
  },
});

const city = argv.ciudad;
console.log(`Buscando temperatura para la ciudad: ${city}`.info);
console.log(`Buscando...`.warn);
getClime(city);
