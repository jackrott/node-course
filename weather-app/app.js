const request = require('request')

const url = 'https://api.darksky.net/forecast/9532abce5cac837dab75119a5c1f8ca2/37.8267,-122.4233?units=si&lang=es'

request({url: url, json: true}, (error, response) => {
    const currently = response.body.currently;
    console.log(response.body.daily.data[0].summary + ' Temperatura actual ' +   currently.temperature + ' grados celsius. Con una probabilidad de ' + currently.precipProbability + ' de precipitaciones') 
})