const ProDuctServices = require("../../../services/productServices");
const orderServices = require("../../../services/orderServices");
const cart = require("./../viewPublicController/cart");
// const cartServices = require("../../../services/cartServices");
const cartServices = require("../../../services/cartServices");
// const e = require("express");
var LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./scratch");
class PublicView {
  getHomePage = async (req, res, next) => {
    const productServices = new ProDuctServices();
    const products = await productServices.getAllProducts();
    const amount = await new cart().getQuantityInCartById();
    const userId = localStorage.getItem("userId");
    console.log('userId', userId)
    // console.log("amount", amount);
    
    res.render("public/index", { products, amount, userId });
    // res.send("Trang chủ");
  };

  getProductDetailPage = async (req, res, next) => {
    const { id } = req.params;
    const amount = await new cart().getQuantityInCartById();
    const userId = localStorage.getItem("userId");
    // console.log(id)
    const productServices = new ProDuctServices();
    const product = await productServices.getOneProduct(id);
    res.render("public/product-details", { product, amount, userId });
    // res.send("Chi tiet san pham");
  };

  getCheckoutPage = async (req, res, next) => {
    const amount = await new cart().getQuantityInCartById();

    const userId = localStorage.getItem("userId");
    if (userId) {
      res.render("public/checkout", { amount, userId });
    } else {
      res.redirect("/user/login");
    }
  };

  handleToOrder = async (req, res) => {
    const orderCode = Math.floor(Math.random() * 1000 * Math.random() * 1000);
    const amount = await new cart().getQuantityInCartById();
    const userId = localStorage.getItem("userId");
    const data = {
      orderID: orderCode,
      userID: userId,
      infoReceiver: req.body,
      products: amount,
      status: 1,
    };
    await new orderServices().addToOrder(data);
    await new cart().deleteCartWhenAddOrder();
    res.redirect("/order");
  };
  // getOrderPage = async (req, res, next) => {
  //   res.send("order");
  // };
}

module.exports = PublicView;
