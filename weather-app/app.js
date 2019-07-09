const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Talagante', (error, data) => {
    console.log('error', error)
    console.log('data', data)
})

forecast(-70.93333, -33.66667, (error, data) => {
    console.log('error', error)
    console.log('data', data)
})