// const ProDuctServices = require("../../../services/productServices");

const cartServices = require("../../../services/cartServices");
const productServices = require("../../../services/productServices");
const LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./scratch");
class Cart {
  getHomePage = async (req, res, next) => {
    const amount = await this.getQuantityInCartById();
    const item = await this.getProductDetailInCartById();
    const userId = localStorage.getItem("userId");
    // console.log(`aaa`, localStorage.getItem("lastname"));
    if (userId === null) {
      res.redirect("/user/login");
    } else {
      res.render("public/cart", { amount, item, userId });
    }
  };
  getQuantityInCartById = async (req, res) => {
    const userId = localStorage.getItem("userId");
    const result = await new cartServices().getCartByUserId(userId);
    return result;
  };
  getProductDetailInCartById = async (req, res) => {
    const arr = await this.getQuantityInCartById();
    let text = [];

    for (let i = 0; i < arr.length; i++) {
      let rs = await new productServices().getOneProduct(arr[i]["productID"]);
      text.push(rs[0]);
    }
    // console.log(`text`, text);
    return text;
  };
  // cart
  addToCart = async (req, res) => {
    // console.log(req.params.id)
    // console.log(localStorage.getItem("userId"));
    const userId = localStorage.getItem("userId");
    const amount = await this.getQuantityInCartById();
    const cart = { userID: userId, productID: req.params.id };
    if (userId) {
      await new cartServices().addToCart(cart);
      await this.getProductDetailInCartById();
      await new cartServices().getCartByUserId(userId);
      res.redirect("/cart");
    } else {
      res.redirect("/user/login");
    }
  };
  deleteItemInCart = async (req, res) => {
    const productId = req.params.id;
    const userId = localStorage.getItem("userId");
    const item = { productID: productId, userID: userId };
    const rs = await new cartServices().deleteItemInCart(item);

    if (rs == undefined) {
      res.redirect("/cart");
    }
    // return rs;
  };
  reduceItem = async (req, res) => {
    // console.log(req.params.id);
    const userId = localStorage.getItem("userId");
    const cartItem = { userID: userId, productID: req.params.id };
    await new cartServices().updateCartItem(cartItem, -1);
    res.redirect("/cart");
  };

  increaseItem = async (req, res) => {
    // console.log(req.params.id);
    const userId = localStorage.getItem("userId");
    const cartItem = { userID: userId, productID: req.params.id };
    await new cartServices().updateCartItem(cartItem, 1);
    res.redirect("/cart");
  };
  deleteCartWhenAddOrder = async (req, res) => {
    const userId = localStorage.getItem("userId");
    const result = new cartServices().deleteCartWhenAddOrder(userId)
  };
}
module.exports = Cart;
