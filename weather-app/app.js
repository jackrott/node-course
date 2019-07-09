const request = require('request')
const geocode = require('./utils/geocode')

/*const url = 'https://api.darksky.net/forecast/9532abce5cac837dab75119a5c1f8ca2/37.8267,-122.4233?units=si&lang=es'

request({url: url, json: true}, (error, response) => {

    if(error) {
        console.log('servicio no disponible (weather service)')
    } else if (response.body.error) {
        console.log('Lugar no encontrado')
    }else {
        const currently = response.body.currently;
    console.log(response.body.daily.data[0].summary + ' Temperatura actual ' +   currently.temperature + ' grados celsius. Con una probabilidad de ' + currently.precipProbability + ' de precipitaciones') 
    }
})*/


/**
 * geocode
 * Address => lat, long -> weather
 */
/*const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamFja3JvdHQiLCJhIjoiY2p4dG5jbGNmMHdoaDNndDVjOXV3Ym1neSJ9.C6EevASIEw-Aa6Pk9GA5Og&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
    if(error) {
        console.log('Servicio no disponible (mapbox)')
    } else if(response.body.features.length < 1) {
        console.info('No se han encontrado coincidencias')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude) 
    }
})*/


geocode('Talagante', (error, data) => {
    console.log('error', error)
    console.log('data', data)
})