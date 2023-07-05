const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

const authenticationRouter = require('./module/routers/authenticationRouter') 

//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//routers
app.get('/', (req, res) => {
  res.send('checking server path')
})

app.use('/authentication',authenticationRouter)

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})