const express = require('express');
const productAPI = require('../testAPI/productAPI');
const routeAdmin = require('./routeAdmin/index');
const routePublic = require('./routePublic/main/index');
const productDetail = require('./routePublic/productDetail');
const singIn = require('./signIn/index')
// const routePublic = require('./routePublic');
// const routeView = require('./routeView');

module.exports = () => {
    const router = express.Router();
    routePublic(router)
    routeAdmin(router);
    productAPI(router);
    productDetail(router);
    singIn(router);
    // routePublic(router);
    // routeView(router);

    return router;
}
