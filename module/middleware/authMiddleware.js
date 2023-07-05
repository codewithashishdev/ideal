const {responseObject} = require('../utility/responseObject')
const {responseMessage} = require('../utility/utils')

exports.authMiddleware = async (req, res, next) => {
    console.log(req.body)
  if (req.body !== null){
    next()
  }
  res.send(responseObject   (
    responseMessage.middlewareError,
    null,
    404,
    null
  ))
}