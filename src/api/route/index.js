const express = require("express");
// const productAPI = require('../testAPI/productAPI');
const routerAccount =require('./account/index')
const routeAdmin = require("./routeAdmin/index");
const routePublic = require("./routePublic/index");
// const productDetail = require('./routePublic/productDetail');
// const singIn = require('./account/index')
// const routePublic = require('./routePublic');
// const routeView = require('./routeView');

module.exports = () => {
  const router = express.Router();
  routerAccount(router);
  routePublic(router);
  routeAdmin(router);
  // productAPI(router);
  // productDetail(router);
  // singIn(router);
  // routePublic(router);
  // routeView(router);

  return router;
};
