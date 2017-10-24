const express = require('express');
const app = express();
const path = require('path')

app.get('/api/products', function(request, response) {
    response.sendFile( path.join(__dirname, 'productos.json' ));
});

let puerto = 3000 ;
app.listen( puerto , function() {

    console.log(`Servidor corriendo en el puerto ${puerto}`);
});