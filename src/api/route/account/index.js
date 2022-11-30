const express = require("express");
const router = express.Router();
const login = require("./main/login");
const register = require("./main/register");
const logout =require("./main/logout")
// const  Sign
module.exports = (app) => {
  app.use("/user", login(router));
  app.use("/user", register(router));
  app.use("/user", logout(router));
};
