const express = require("express");
const router = express.Router();
const ManagerAllContent = require("./main");
const managerUser = require("./main/userRouter");
const managerProduct = require("./main/productRouter");
module.exports = (app) => {
  app.use("/admin", ManagerAllContent(router));
  app.use("/admin", managerProduct(router));
  app.use("/admin", managerUser(router));
  // return router;
}; 
