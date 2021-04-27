const products = require('../products.json')

const getProduct = (req, res) => {
  const foundIndex = products.findIndex(val => {
    return val.id === parseInt(req.params.id)
  })

  if(!foundIndex){
    return res.status(500).send(`${req.params.id} not found`)
  } else {
    return res.status(200).send(products[foundIndex])
  }
}

module.exports = getProduct