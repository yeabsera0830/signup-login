const login = require('./login_facebook')
var User = require('../model/User')
var connect = require('../config/auth').connect
var bcrypt = require('bcryptjs')
connect()

it('Checks for login with phone', () => {
    User.findOne( {phone: '944701899'} )
        .then(user => {
            bcrypt.compare('12345678', user.password, (err, isMatch) => {
                if (err) expect(0).toBe(1)
                if (isMatch) {
                     expect(1).toBe(1)
                } else {
                    expect(0).toBe(1)
                }
            })
        })
});

it('Checks for a fail test login with phone', () => {
    User.findOne( {phone: '944701899'} )
        .then(user => {
            bcrypt.compare('112345678', user.password, (err, isMatch) => {
                if (err) expect(1).toBe(1)
                if (isMatch) {
                     expect(0).toBe(1)
                } else {
                    expect(1).toBe(1)
                }
            })
        })
});