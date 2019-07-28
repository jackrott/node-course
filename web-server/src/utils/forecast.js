const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const strLatLg = latitude + ',' + longitude
    const url = 'https://api.darksky.net/forecast/9532abce5cac837dab75119a5c1f8ca2/' + encodeURIComponent(strLatLg) + '?units=si&lang=es'

    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Servicio de pronostico no disponible', undefined)
        } else if (body.error) {
            callback('Pronostico no encontrado para latitud:' + latitude + ', longitud: ' + longitude, undefined)
        }else {
            const currently = body.currently;
            console.info(body.daily.data[0]);
            callback(undefined, body.daily.data[0].summary + ' Temperatura actual ' +   currently.temperature + ' grados celsius. Temperatura mínima: ' + body.daily.data[0].temperatureMin + ' y temperatura máxima: ' + body.daily.data[0].temperatureMax + '. Con una probabilidad de ' + currently.precipProbability + ' de precipitaciones') 
        }
    })
}

module.exports = forecast