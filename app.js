const clima = require('./controller/clima');
// eslint-disable-next-line import/order
const { argv } = require('yargs').options({
  ciudad: {
    alias: 'c',
    desc: 'Nombre de la ciudad para obtener el clima',
    demand: true,
  },
});

const city = argv.ciudad;
const temperatura = clima.getClima(city);
// console.log(typeof temperatura);
// console.log(temperatura);
temperatura
  .then((result) => {
    console.log(result);
    console.log(`La temp es ${result}`);
  })
  .catch((err) => {
    console.log(`Hola ${err}`);
  });

// Tarea
// 1.Modifical el codigo para obtener un error coherente
// 2.-Cambiar para que me muestre en C
// 3.-Mostrar los datos del clima y actualizar colores
//      3.-Si esta nublado un color, soleado otro color y asi
// Subir el codigo a GitHub
