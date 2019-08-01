//crud
/*const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID*/
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    
    /*db.collection('users').findOne({name: 'Hernan'}, (error, user) => {
        if(error) {
            return console.log('problemas al obtener la información del usuario')
        }

        console.log(user)
    })*/
    
    db.collection('task').findOne({ _id: new ObjectID("5d42319d824c5e72c78ecb89") }, (error, task) => {
        console.log(task)
    })

    db.collection('task').find({completed: false}).toArray((error, task) => {
        console.log(task)
    })
})
