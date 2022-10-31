const express = require('express');
const ProductDetail = require('../../controller/viewPublicController.js/productDetail');
const route = express.Router()
module.exports = (app) => {
    app.use('/product', route);
    route.get('/:id', new ProductDetail().getOneProduct)
}