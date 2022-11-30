const ProductServices = require("../../../services/productServices");
const deleteImage = require("../../../middleware/fs");
const fs = require("fs");
class ProductController {
  //render home page
  getHomePage = async (req, res, next) => {
    const productServices = new ProductServices();
    const result = await productServices.getAllProducts();
    // console.log(result)
    res.render("admin/manage/product/index", { result: result });
    // res.send(result)
  };
  // render addUserPage
  addProductPage = async (req, res, next) => {
    const result = null;

    await res.render("admin/manage/product/add-product", { result });
  };
  //handle add product
  addProduct = async (req, res, next) => {
    // console.log(req.file.filename)
    console.log(req.file);
    const rest = Buffer.from(fs.readFileSync(req.file.path));
    const b64 = rest.toString("base64");
    const data = {
      name: req.body.name,
      // image: req.file.filename,
      image: b64,
      price: req.body.price,
      inventory: req.body.inventory,
      category: req.body.category,
    };
    // console.log(data)
    const productServices = new ProductServices();
    await productServices.addProduct(data);
    res.redirect("/admin/product");
  };
  //rendering updateProductPage
  updateProductPage = async (req, res, next) => {
    const productServices = new ProductServices();
    const result = await productServices.getOneProduct(req.params.id);
    // console.log(result)
    // res.send(result)
    await res.render("admin/manage/product/add-product", { result: result });
  };

  //handle update product
  updateProduct = async (req, res, next) => {
   
    console.log(req.body)
    console.log(req.file)
    let { image } = req.body;
    // console.log('image', image)

    if (req.file) {
      // console.log(`co`)
     const rest = Buffer.from(fs.readFileSync(req.file.path));
    const b64 = rest.toString("base64");
      // image = req.file.filename;
      image = b64
    }
    // console.log(req.body)
    const data = {
      ...req.body,
      image,
    };
    // console.log(data)
    const productServices = new ProductServices();
    const result = await productServices.updateProduct(data);
  //   if (result) {
  //     if (req.file) {
  //       // let { image } = result;
  //       // await deleteImage(image);
  //     }
  //   }
    res.redirect("/admin/product");
  };
  //delete Product
  deleteProduct = async (req, res, next) => {
    try {
      const { id } = req.params;
      const productServices = new ProductServices();
      const result = await productServices.deleteOneProduct(id);
      if (!result) {
        throw Error;
      }
      // const { image } = result;
      // deleteImage(image);
      res.redirect("/admin/product");
    } catch (error) {
      console.log(`loi khi delete`);
    }
  };
}
module.exports = ProductController;
