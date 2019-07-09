const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address) {
    console.log('Ingrese la dirección porfavor')
}

geocode(address, (error, data) => {
    console.log('error', error)
    console.log('data', data)

    if(error) {
        return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error) {
            return console.log(error)
        }

        console.log(data.location)
        console.log(forecastData)
    })
})