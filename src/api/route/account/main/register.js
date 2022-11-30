const express = require("express");
const register = require("../../../controller/viewAdminController/account");
const router = express.Router();
module.exports = (app) => {
  app.use("/user", router);
  router.get("/register", new register().getRegisterHome);
  router.post("/register", new register().checkRegister);
  return router;
};
