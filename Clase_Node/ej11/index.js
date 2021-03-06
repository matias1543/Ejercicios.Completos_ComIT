const express = require('express');
const app = express();
const path = require('path')

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/products', function(request, response) {
    response.sendFile(path.join(__dirname, 'products/index.html'));
});

let puerto = 3000 ;
app.listen( puerto , function() {

    console.log(`Servidor corriendo en el puerto ${puerto}`);
});