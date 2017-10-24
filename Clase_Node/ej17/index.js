const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
app.listen(3000)


//Setean Main.Handlebars como TEMPLATE
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')



//Archivos Assets Publicos
app.use(express.static('public'))



//Manejo de direcciones
app.get('/', function (req, res) {
    res.render('home')
})
app.get('/contact', function (req, res) {
    res.render('contact')
})

app.get('/products', function (req, res) {
    res.render('products', { products: products})
})