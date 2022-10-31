const ProductController = require("../controller/viewAdminController/productController")

module.exports = (app) => {
    app.get('/api/product', new ProductController().getHomePage)
    app.get('/api/product/:id', new ProductController().updateProductPage)
    app.post('/api/product', new ProductController().addProduct)
    app.put('/api/product/:id', new ProductController().updateProduct)
    app.delete('/api/product/:id', new ProductController().deleteProduct)
}