//data file
const products = require('../products.json')

//handler here
const getProducts = (req, res) => {res.status(200).send(products)}

module.exports = getProducts