const chalk = require('chalk')
const getNotes = require('./notes.js')

const commnad = process.argv[2];

if(commnad === 'add') {
    console.log('adding note')
} else if(commnad === 'remove') {
    console.log('removing note')
}