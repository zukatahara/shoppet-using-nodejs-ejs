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
    //cart
    const amount = await new cart().getQuantityInCartById();
    // console.log('amount', amount)

    const orderId = req.params.id;
    const result = await new orderServices().getOrderByOrderId(orderId);
    console.log('result', result)
    const arr = [];
    for (let index = 0; index < result[0]["products"].length; index++) {
      const element = result[0]["products"][index];
      arr.push(element);
    }
    const info = result[0]["infoReceiver"];
    // console.log("info", info);
    let data = [];
    for (let i = 0; i < arr.length; i++) {
      let rs = await new productServices().getOneProduct(
        arr[i]["productID"],
        arr[i]["quantity"]
      );
      data.push(rs[0]);
    }
    res.render("public/order-details", { userId, amount, data, result, info });
  };
}

module.exports = Order;
