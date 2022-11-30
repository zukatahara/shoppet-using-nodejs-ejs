const express = require("express");
const publicView = require("./../../controller/viewPublicController/index");
const cartView = require("./../../controller/viewPublicController/cart");
const orderView = require("./../../controller/viewPublicController/order");
const route = express.Router();

module.exports = (app) => {
  app.use("/", route);
  route.get("/", new publicView().getHomePage);
  route.get("/product/:id", new publicView().getProductDetailPage);
  //checkout
  route.get("/checkout", new publicView().getCheckoutPage);
  route.post("/checkout", new publicView().handleToOrder);
  //cart
  route.get("/cart", new cartView().getHomePage);
  route.get("/cart/delete/:id", new cartView().deleteItemInCart);
  route.get("/cart/:id/increase", new cartView().increaseItem);
  route.get("/cart/:id/reduce", new cartView().reduceItem);
  route.get("/add-to-cart/:id", new cartView().addToCart)
  //order
  route.get("/order", new orderView().getHomePage);
  route.get("/order/:id", new orderView().getProductDetailInOrderById);
};
