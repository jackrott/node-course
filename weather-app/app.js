const request = require('request')

const url = 'https://api.darksky.net/forecast/9532abce5cac837dab75119a5c1f8ca2/37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})