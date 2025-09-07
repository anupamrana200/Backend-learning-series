require('dotenv').config()
const express = require('express')
// import express from 'express' //we can use import also instead of require
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Anupamdotcom')
})

app.get('/login', (req, res) => {
  res.send('<h2> Please Login </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
