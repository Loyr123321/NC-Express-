const express = require('express')
const path = require('path')
const cors = require('cors')
const controllers = require('./controllers')
const requestLogger = require('./middlewares/request-logger.middleware')

const port = 3000;

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.resolve(__dirname, 'views'))

server.use(express.static(path.resolve(__dirname, 'public')))

server.use(
  cors({
    origin: '*',
  })
)

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(requestLogger)

server.use(controllers)

server.listen(port, () => {
  console.log(`Сервер работает на порте: ${port}`)
})