const express = require('express')

const v1 = express.Router()

v1.get('/', (req, res, next) => {
  res.json({ what: 'API version 1'})
})

v1.get('/user', (req, res, next) => {
  res.json({ meta: {}, objects: [ { name: "Huong" }, { name: "shovity" } ] })
})

module.exports = v1