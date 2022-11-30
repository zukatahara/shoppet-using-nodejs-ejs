const express = require("express");
const router = express.Router();
const allContent = require("./manager/index");
const user = require("./manager/userRouter");
const product = require("./manager/productRouter");
module.exports = (app) => {
  //home
  app.use("/admin", allContent(router));
  //product
  app.use("/admin/product", product(router));
  // user
  app.use("/admin", user(router));
  // return router;
};
