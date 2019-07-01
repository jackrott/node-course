const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data);

data.name = 'Hernan'
data.age = 33

const updateData = JSON.stringify(data)
fs.writeFileSync('1-json.json', updateData)