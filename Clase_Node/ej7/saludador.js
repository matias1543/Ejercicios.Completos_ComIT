const saludar = (nombre, apellido, next) => {
    console.log(`Hola ${nombre} ${apellido}`);
    next();
}

const callback = () => {
    console.log('Luego de saludar se ejecuta el callback');
}

module.exports = saludar;
module.exports = callback;