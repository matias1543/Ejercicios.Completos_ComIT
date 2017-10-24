const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Bienvenidos a Node.js Server Side');
});

app.listen(port, (err) => {
    if(err) {
        console.log(`No se pudo levantar el servidor en el puerto ${port}`);
    } else {
        console.log(`Servidor corriendo en el puerto ${port}`);
    }
})