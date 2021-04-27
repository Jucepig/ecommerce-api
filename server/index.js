const express = require('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express()

// GET requests
app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)

const port = 3047
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})