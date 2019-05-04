var User = require('../model/User')
var bcrypt = require('bcryptjs')

var connect = require('../config/auth').connect
connect()

function loginPhone(phone, password) {
    return (
        User.findOne({ phone: phone })
        .then(user => {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err
                if (isMatch) {
                    return user.token.zelia
                } else {
                    return err
                }
            })
        })
        .catch(err => err)
    )
}

module.exports = loginPhone