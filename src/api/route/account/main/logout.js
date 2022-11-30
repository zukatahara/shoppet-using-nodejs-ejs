const express = require("express");
// const SignIn = require('../../controller/viewPublicController.js/signIn');
// const productServices = require("../../../services/productServices");
const LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./scratch");
// const login = require("../../../controller/viewAdminController/account");
const router = express.Router();
module.exports = (app) => {
  app.use("/user", router);
  //   router.get("/login", (req, res) => {
  //     res.send(`wfsda`);
  //   });
  router.get("/logout", (req, res) => {
    // res.send(`oke`);
    const removeUser = localStorage.removeItem("userId");
    console.log(removeUser);
    res.redirect("/");
  });
  return router;
  // app.use('/', route);
  // route.post('/', new SignIn().getResult)

  // route.post('/', (req,res)=>{
  //     console.log(`signIn-POST`)
  //     console.log(req.body)
  //     res.redirect('/')
  // })
};
