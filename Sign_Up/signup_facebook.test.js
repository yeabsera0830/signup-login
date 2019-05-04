var User = require('../model/User')
var bcrypt = require('bcryptjs')
var connect = require('../config/auth').connect
var axios = require('axios')

connect()

it('Checks if you can signup using facebook', () => {
    const token = 'EAAIZCRdirl3wBABdZAECA2ZAaebwZAZCechaVS3ZBRZBdxBYzPD0ZCimjZBekaHZAjnCRCAG4nMDtUSAxBrY1oGK8dPUZAhbPucFZCLMoKIHqnldtE5v5cmxbZBzVwEaEZA3uUeVmVHMraG3kRWn80rfFLkZBoESNns5pmGrFApMhmmhpxM9Qe2XVbdDnnpZBPMyStfch4wxACuBxZCa2iDUnqF44guse7CauxPYbRZCeVYcJuZAZCzYYQZDZD'
    const url = `https://graph.facebook.com/v3.3/me?fields=email,name&access_token=${token}`
    axios.get(url)
        .then(info => {
            var newUser = new User()    
            newUser.token.zelia = 'test1'
            newUser.token.facebook = 'test1'
            newUser.fbID = 'test1'
            newUser.email = 'test1'
            newUser.name = 'test1'
            newUser.save()
                    .then(user => {
                        expect(user.email).toBe('test1')
                    })
                    .catch(err => err)
        })

});

it('Checks for a fail test on signup using facebook', () => {
    const token = 'EAAIZCRdirl3wBABdZAECA2ZAaebwZAZCechaVS3ZBRZBdxBYzPD0ZCimjZBekaHZAjnCRCAG4nMDtUSAxBrY1oGK8dPUZAhbPucFZCLMoKIHqnldtE5v5cmxbZBzVwEaEZA3uUeVmVHMraG3kRWn80rfFLkZBoESNns5pmGrFApMhmmhpxM9Qe2XVbdDnnpZBPMyStfch4wxACuBxZCa2iDUnqF44guse7CauxPYbRZCeVYcJuZAZCzYYQZDZD'
    const url = `https://graph.facebook.com/v3.3/me?fields=email,name&access_token=${token}`
    axios.get(url)
        .then(info => {
            var newUser = new User()    
            newUser.token.zelia = 'test1'
            newUser.token.facebook = 'test1'
            newUser.fbID = 'test1'
            newUser.email = 'test1'
            newUser.name = 'test1'
            newUser.save()
                    .then(user => {
                        expect(user.email).not.toBe('test')
                    })
                    .catch(err => err)
        })

});