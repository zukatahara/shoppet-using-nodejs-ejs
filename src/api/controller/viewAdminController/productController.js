const ProductServices = require("../../../services/productServices");
const fs = require('./../../../middleware/fs');
class ProductController {
    //render home page
    getHomePage = async (req, res, next) => {
        const productServices = new ProductServices();
        const result = await productServices.getAllProducts();
        // console.log(result)
        res.render('admin/shows/product', { result: result })
        // res.send(result)
    }
    // render addUserPage
    addProductPage = async (req, res, next) => {
        const result = null;

        await res.render('admin/shows/addProduct', { result })

    }
    //handle add product 
    addProduct = async (req, res, next) => {
        // console.log(req.file.filename)
        const data = {
            name: req.body.name,
            image: req.file.filename,
            price: req.body.price,
            inventory: req.body.inventory,
            category: req.body.category,
        };
        // console.log(data)
        const productServices = new ProductServices();
        await productServices.addProduct(data);
        res.redirect('/admin/product')
    }
    //rendering updateProductPage
    updateProductPage = async (req, res, next) => {
        const productServices = new ProductServices();
        const result = await productServices.getOneProduct(req.params.id);
        // console.log(result)
        // res.send(result)
        await res.render('admin/shows/addProduct', { result: result })
    }

    //handle update product 
    updateProduct = async (req, res, next) => {
        // console.log(req.body)
        // console.log(req.file)
        let { image } = req.body;

        if (req.file) {
            // console.log(`co`)
            image = req.file.filename;
        }
        // console.log(req.body)
        const data = {
            ...req.body,
            image
        }
        // console.log(data)
        const productServices = new ProductServices();
        const result = await productServices.updateProduct(data);
        if (result) {
            if (req.file) {
                let { image } = result;
                await fs(image);
            }
        }
        res.redirect('/admin/product')
    }
    //delete Product
    deleteProduct = async (req, res, next) => {
        try {
            let { id } = req.params
            const productServices = new ProductServices();
            const result = await productServices.deleteOneProduct(id);
            // console.log(result)
            if (result) {
                let { image } = result;
                // console.log('image', image)
                await fs(image)
            }
            res.redirect('/admin/product')
        } catch (error) {
            console.log(`loi khi delete`)
        }

    }
}
module.exports = ProductController;