const Logger = require('logplease');
const logger = Logger.create('utils');
const numPar = require('./numeros');

let array = [2, 3, 101, 201, 202, 100];

array.forEach(function (numero) {
    numPar(numero) ? logger.info('El numero es par') : logger.error('El numero no es par');
});
