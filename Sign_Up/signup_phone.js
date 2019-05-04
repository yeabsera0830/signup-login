var User = require('../model/User')
var bcrypt = require('bcryptjs')
var connect = require('../config/auth').connect

connect()

function rand() {
    return Math.random().toString(36).substr(2)
}

module.exports = {
    signup_phone: (phone, password) => {
        let newUser = new User()
        token = rand() + rand()
        bcrypt.genSalt(10, (err, salt) => bcrypt.hash(password, salt, (err, hash) => {
            newUser.phone = phone
            newUser.password = hash
            newUser.token.zelia = token
            //Save user
            newUser.save()
                .then(user => {
                    console.log("user signed up successfully")
                })
                .catch(err => {
                    console.log("Error Occured")
                })
        }))
    }

}