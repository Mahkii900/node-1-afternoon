//data file
const products = require('../products.json')

//handler here
const getProducts = (req, res) => {
    if (req.query.price) {
        const prices = products.filter(item => item.price >= parseInt(req.query.price))
        return res.status(200).send(prices)
    } else {
        res.status(200).send(products)}
    }

//export getProducts
module.exports = getProducts