const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamFja3JvdHQiLCJhIjoiY2p4dG5jbGNmMHdoaDNndDVjOXV3Ym1neSJ9.C6EevASIEw-Aa6Pk9GA5Og&limit=1'

    request({url: url, json: true }, (error, response) => {
        if(error) {
            callback('Servicio de geolocalización no disponible (mapbox)', undefined)
        } else if(response.body.features.length < 1) {
            callback('No se han encontrado coincidencias para ' + address, undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode