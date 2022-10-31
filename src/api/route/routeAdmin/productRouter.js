const express = require('express');
const upload = require('./../../../middleware/multer');
const router = express.Router();
const ProductController = require('../../controller/viewAdminController/productController')


module.exports = (app => {
    app.use('/admin/product', router);
    router.get('/', new ProductController().getHomePage);
    router.get('/add', new ProductController().addProductPage);
    router.post('/add',upload.single("image") ,new ProductController().addProduct)
    router.get('/update/:id', new ProductController().updateProductPage);
    router.post('/update', upload.single("image"),new ProductController().updateProduct);
    router.get('/delete/:id', new ProductController().deleteProduct)
})