const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Definición de paths - Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
//setup static directory
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
        name: 'Hernán',
        message: 'AYUDA proporcionada por Maximiliano Andres'
    })
})

app.get('/weather', (req, res) => {
    
    if(!req.query.address) {
        return res.send({
            error: 'You must provide a address term'
        })
    }
    
    
    res.send({
        forecast: 'lluvia',
        location: 'talagante',
        address: req.query.address
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    // console.info(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Hernán Soto',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Hernán Soto',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})