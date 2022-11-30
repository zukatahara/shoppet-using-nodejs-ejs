const orderServices = require("../../../services/orderServices");
const cart = require("../viewPublicController/cart");
const productServices = require("../../../services/productServices");
const LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./scratch");
class Order {
  getHomePage = async (req, res, next) => {
    const amount = await new cart().getQuantityInCartById();
    // const item = await this.getProductDetailInCartById();
    const userId = localStorage.getItem("userId");
    const result = await new orderServices().getOrderByUserId(userId);

    if (userId === null) {
      res.redirect("/user/login");
    } else {
      // res.render("public/order", { amount, item, userId });
      res.render("public/order", { amount, userId, result });
    }
  };
  // getQuantityInCartById = async (req, res) => {
  //   const userId = localStorage.getItem("userId");
  //   const result = await new cartServices().getCartByUserId(userId);
  //   return result;
  // };
  getProductDetailInOrderById = async (req, res) => {
    const userId = localStorage.getItem("userId");
    const amount = await new cart().getQuantityInCartById();
    const orderId = req.params.id;
    const result = await new orderServices().getOrderByOrderId(orderId);
    // console.log('result', result)
    const arr = [];
    for (let index = 0; index < result[0]["products"].length; index++) {
      const element = result[0]["products"][index];
      arr.push(element);
    }
    // console.log('arr', arr)
    const info = result[0]["infoReceiver"];
    console.log("info", info);
    let data = [];
    for (let i = 0; i < arr.length; i++) {
      let rs = await new productServices().getOneProduct(
        arr[i]["productID"],
        arr[i]["quantity"]
      );
      data.push(rs[0]);
      data[i]["inventory"] = arr[i]["quantity"];
    }
    // console.log('data', data)
    res.render("public/order-details", { userId, amount, data, info });
  };
  // // cart
  // addToCart = async (req, res) => {
  // console.log(req.params.id)
  //   // console.log(localStorage.getItem("userId"));
  //   const userId = localStorage.getItem("userId");
  //   const amount = await this.getQuantityInCartById();
  //   const cart = { userID: userId, productID: req.params.id };
  //   if (userId) {
  //     await new cartServices().addToCart(cart);
  //     await this.getProductDetailInCartById();
  //     await new cartServices().getCartByUserId(userId);
  //     res.redirect("/cart");
  //   } else {
  //     res.redirect("/user/login");
  //   }
  // };
  // //   getCartPage = async (req, res, next) => {
  // //     // res.send("gio hang");
  // //   };

  // //   getCheckoutPage = async (req, res, next) => {
  // //     res.send("Checkout");
  // //   };
  // //   getOrderPage = async (req, res, next) => {
  // //     res.send("order");
  // //   };
  // deleteItemInCart = async (req, res) => {
  //   const productId = req.params.id;
  //   const userId = localStorage.getItem("userId");
  //   const item = { productID: productId, userID: userId };
  //   const rs = await new cartServices().deleteItemInCart(item);

  //   if (rs == undefined) {
  //     res.redirect("/cart");
  //   }
  //   // return rs;
  // };
  // reduceItem = async (req, res) => {
  //   console.log(req.params.id);
  //   const userId = localStorage.getItem("userId");
  //   const cartItem = { userID: userId, productID: req.params.id };
  //   await new cartServices().updateCartItem(cartItem, -1);
  //   res.redirect("/cart");
  // };

  // increaseItem = async (req, res) => {
  //   // alert("ahah")
  //   console.log(req.params.id);
  //   const userId = localStorage.getItem("userId");
  //   const cartItem = { userID: userId, productID: req.params.id };
  //   await new cartServices().updateCartItem(cartItem, 1);
  //   res.redirect("/cart");
  // };
}

module.exports = Order;
