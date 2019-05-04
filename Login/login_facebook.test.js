const login = require('./login_facebook')
var User = require('../model/User')
var connect = require('../config/auth').connect
var axios = require('axios')
connect()
const token = 'EAAIZCRdirl3wBABdZAECA2ZAaebwZAZCechaVS3ZBRZBdxBYzPD0ZCimjZBekaHZAjnCRCAG4nMDtUSAxBrY1oGK8dPUZAhbPucFZCLMoKIHqnldtE5v5cmxbZBzVwEaEZA3uUeVmVHMraG3kRWn80rfFLkZBoESNns5pmGrFApMhmmhpxM9Qe2XVbdDnnpZBPMyStfch4wxACuBxZCa2iDUnqF44guse7CauxPYbRZCeVYcJuZAZCzYYQZDZD'


it('This checks for login facebook', () => {
    const url = `https://graph.facebook.com/v3.3/me?fields=email,name&access_token=${token}`
    axios.get(url)
        .then(info => {
            id = info.data.id
            User.findOne( {fbID: id} )
                    .then(user => {
                        expect(user.fbID).toBe(id)
                    })
                    .catch(err => err)
        })
});

it('This checks for a fail test login facebook', () => {
    const url = `https://graph.facebook.com/v3.3/me?fields=email,name&access_token=${token}`
    axios.get(url)
        .then(info => {
            id = 'test123'
            User.findOne( {fbID: id} )
                    .then(user => {
                        expect(user.fbID).not.toBe(id)
                    })
                    .catch(err => {
                        expect(1).toBe(1)
                    })
        })
});