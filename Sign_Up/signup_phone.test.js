var User = require('../model/User')
var bcrypt = require('bcryptjs')
var connect = require('../config/auth').connect

connect()

it('Checks if the signup with phone works', () => {
    let newUser = new User()
    newUser.phone = 'test'
    newUser.password = 'test'
    newUser.token.zelia = 'test'
    newUser.save()
        .then(user => {
            expect(user.phone).toBe('test')
        })
        .catch(err => err)
});

it('Checks for a fail test for signup with phone', () => {
    let newUser = new User()
    newUser.phone = 'test'
    newUser.password = 'test'
    newUser.token.zelia = 'test'
    newUser.save()
        .then(user => {
            expect(user.phone).not.toBe('test1')
        })
        .catch(err => err)
});