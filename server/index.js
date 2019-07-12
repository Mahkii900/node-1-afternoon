//set up server
const express = require('express')
const app = express()
const PORT = 4001

//files needed
const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

//apis or endpoints
app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)

//listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))