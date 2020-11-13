const clima = require('./controller/clima');
const argv = require('yargs').options({
  ciudad: {
    alias: 'c',
    desc: 'Nombre de la ciudad para obtener el clima',
    demand: true,
  },
}).argv;
