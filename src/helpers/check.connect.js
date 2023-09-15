'use strict'

const mongoose = require('mongoose')
const _SECONDS = 5000

// count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of connections::${numConnection}`)
}

// check over load
const checkOverload = () => {
    setInterval(() => {}, _SECONDS) // Monitor every 5 seconds
}

module.exports = {
    countConnect
}