const compression = require("compression")
const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const app = express()

// init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init db
require('./dbs/init.mongodb')

// init routes
app.get('/', (req, res, next) => {
    const strCompress = 'Hello you'
    return res.status(200).json({
        message: 'Welcome!',
        data: strCompress.repeat(100000)
    })
})

// handling error 

module.exports = app