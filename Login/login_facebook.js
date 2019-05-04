var User = require('../model/User')
var connect = require('../config/auth').connect
var axios = require('axios')

connect()
function loginFB(token) {
    const url = `https://graph.facebook.com/v3.3/me?fields=email,name&access_token=${token}`
    return (
        axios.get(url)
            .then(info => {
                id = info.data.id
                User.findOne( {fbID: id} )
                    .then(user => user.token.zelia)
                    .catch(err => err)
            })
            .catch(err => err)
    )
}

module.exports = loginFB