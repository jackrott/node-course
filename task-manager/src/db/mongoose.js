const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }

    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot containt "password"')
            }
        }

    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

/*const me = new User({
    name: 'Hernán Andres',
    email: 'HERnan.andres.s@gmail.com',
    password: 'apsdpasdd',
    age: 34
})

me.save().then((result) => {
    console.log("Usuario registrado exitosamente")
}).catch((error) => {
    console.log(error)
})*/

const task = new Task({
    description: 'Preparar el almuerzo',
})

task.save().then((result) => {
    console.log("Tarea registrada exitosamente")
}).catch((error) => {
    console.log(error)
})