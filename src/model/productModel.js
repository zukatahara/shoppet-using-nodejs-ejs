const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    image: String,
    price: String,
    inventory: String,
    category: String,
});
const productModel = mongoose.model('product', schema)
module.exports = productModel