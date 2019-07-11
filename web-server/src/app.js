const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
/**
 * app.com
 * app.com/help
 * app.com/about
 */

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'lluvia',
        location: 'talagante'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})