const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Hernan',
    email: 'testUserOne@gmail.com',
    password: 'ASDFqwer1234'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Hernan',
        email: 'hernan.andres.s@gmail.com',
        password: 'ASDFqwer1234'
    }).expect(201)
})

test('Should login with existent user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Fail login user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'failPassword'
    }).expect(400)
})