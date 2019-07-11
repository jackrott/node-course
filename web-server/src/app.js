const express = require('express')

const app = express()
/**
 * app.com
 * app.com/help
 * app.com/about
 */
app.get('', (req, res) => {
    res.send('hello express')
})

app.get('/help', (req, res) => {
    res.send('HELP PAGE')
})

app.get('/about', (req, res) => {
    res.send('ABOUT PAGE')
})

app.get('/weather', (req, res) => {
    res.send('WEATHER PAGE')
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})