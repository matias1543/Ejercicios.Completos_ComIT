const express = require('express');
const app = express();
const port = 3001;

/*---------------------------------------*/
app.get('/', function(request, response) {
  response.send('Bienvenidos a Node.js Server Side World!');
});
app.get('/productos', function(req, res) {
    res.send('listado de productos');
});
app.post('/productos', function(req, res) {
    res.send('crear productos');
});
app.put('/productos', function(req, res) {
    res.send('actualizar productos');
});
app.delete('/productos', function(req, res) {
    res.send('borrar productos');
});

/*---------------------------------------*/
app.get('/usuarios', function(req, res) {
    res.send('listado de usuarios');
});
app.post('/usuarios', function(req, res) {
    res.send('crear usuarios');
});
app.put('/usuarios', function(req, res) {
    res.send('actualizar usuarios');
});
app.delete('/usuarios', function(req, res) {
    res.send('borrar usuarios');
});

/*------------ALL---------------------------*/
app.all('/' , function(req, res) {
    res.send('Este es el Metodo ALL');
});


app.listen(port , function() {

    console.log(`Servidor corriendo en el puerto ${port}`);
});