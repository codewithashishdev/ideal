const { responseObject } = require("../utility/responseObject")
const { responseMessage } = require("../utility/utils")

exports.signup = async (req, res) => {
res.send(responseObject(
    responseMessage.signupSuccess,
    req.body,
    201,
    false
))
}

exports.login = async (req, res) => {
 res.send(responseObject(
    responseMessage.loginSuccess,
    req.body,
    200,
    false
 ))
}

