const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000

const cities = ["Orlando", "Winter Park", "Oviedo", "Maitland"];

const populations = [309154, 29131, 39559, 18959];

async function test(){
console.log("test");
}

//This is the base endpoint
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cities', (req, res) => {
  return res.json(cities)
})

app.get('/populations', (req, res) => {
  return res.json(populations)
})

module.exports = app;