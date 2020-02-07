const express = require('express')
const carsRouter = require('./api/cars_router')
const server = express()

server.use(express.json())

server.use('/api/cars', carsRouter)

module.exports = server