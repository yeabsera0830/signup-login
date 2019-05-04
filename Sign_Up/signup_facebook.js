var User = require('../model/User')
var bcrypt = require('bcryptjs')
var axios = require('axios')
var connect = require('../config/auth').connect
var Promise = require('promise')

function rand() {
    return Math.random().toString(36).substr(2)
}

connect()

module.exports = {
    signup_fb: (token) => {
        let done = false
        const url = `https://graph.facebook.com/v3.3/me?fields=email,name&access_token=${token}`
        return (
            axios.get(url)
                .then(info => {
                    var newUser = new User()    
                    zelia_token = rand() + rand()
                    newUser.token.zelia = zelia_token
                    newUser.token.facebook = token
                    newUser.fbID = info.data.id
                    newUser.email = info.data.email
                    newUser.name = info.data.name
                    newUser.save()
                            .then(user => {
                                console.log("User added successfully")
                            })
                            .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        )
    }
}

