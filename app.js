const { getClime } = require('./controller/clima');
// eslint-disable-next-line import/order
const { argv } = require('yargs').options({
  ciudad: {
    alias: 'c',
    desc: 'Nombre de la ciudad para obtener el clima',
    demand: true,
  },
});

const city = argv.ciudad;
console.log(`Buscando temperatura para la ciudad: ${city}`);
console.log(`Buscando...`);
getClime(city);

// Tarea
// 1.Modifical el codigo para obtener un error coherente
// 2.-Cambiar para que me muestre en C
// 3.-Mostrar los datos del clima y actualizar colores
//      3.-Si esta nublado un color, soleado otro color y asi
// Subir el codigo a GitHub
