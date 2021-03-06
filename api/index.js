const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3740

routes(app)

app.listen(port, () => console.log(`O servidor está rodando na porta ${ port }`))

module.exports = app