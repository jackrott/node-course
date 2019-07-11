const express = require('express')

const app = express()
/**
 * app.com
 * app.com/help
 * app.com/about
 */
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Hernán'
    },{
        name: 'Karina'
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>ABOUT</h1>')
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