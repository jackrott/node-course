const request = require('request')

const url = 'https://api.darksky.net/forecast/9532abce5cac837dab75119a5c1f8ca2/37.8267,-122.4233?units=si&lang=es'

request({url: url, json: true}, (error, response) => {
    const currently = response.body.currently;
    console.log(response.body.daily.data[0].summary + ' Temperatura actual ' +   currently.temperature + ' grados celsius. Con una probabilidad de ' + currently.precipProbability + ' de precipitaciones') 
})


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamFja3JvdHQiLCJhIjoiY2p4dG5jbGNmMHdoaDNndDVjOXV3Ym1neSJ9.C6EevASIEw-Aa6Pk9GA5Og&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    
    console.log(latitude, longitude) 
})