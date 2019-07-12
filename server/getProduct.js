//required data
const products = require('../products.json')

//handler
const getProduct = (req, res) => {
    const {id} = req.params
    const product = products.filter(item => item.id === +id)[0]
    if (product) {
        res.status(200).send(product)
    } else {
        res.status(500).send('Item not in list')
    }
}

//export handler
module.exports = getProduct