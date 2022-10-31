const ProDuctServices = require('../../../../services/productServices');

class indexHomePage {
    loadIndexPage = async (req, res, next) => {
        const productServices = new ProDuctServices();
        const allProducts = await productServices.getAllProducts();
        // console.log(allProducts)
        res.render('public/index', { allProducts });
    }
}

module.exports = indexHomePage;