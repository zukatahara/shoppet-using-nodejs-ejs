const express = require("express");
// const SignIn = require('../../controller/viewPublicController.js/signIn');
const login = require("../../../controller/viewAdminController/account");
const router = express.Router();
module.exports = (app) => {
  app.use("/user", router);
  //   router.get("/login", (req, res) => {
  //     res.send(`wfsda`);
  //   });
  router.get("/login", new login().getLoginHome);
  router.post("/login", new login().checkLogin);
  return router;
  // app.use('/', route);
  // route.post('/', new SignIn().getResult)

  // route.post('/', (req,res)=>{
  //     console.log(`signIn-POST`)
  //     console.log(req.body)
  //     res.redirect('/')
  // })
};
