const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))
/**
 * app.com
 * app.com/help
 * app.com/about
 */

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Hernán Soto'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Sobre mí',
        name: 'Hernán Soto'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'AYUDA proporcionada por Maximiliano Andres'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'lluvia',
        location: 'talagante'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})