const express = require('express');
const indexHomePage = require('../../../controller/viewPublicController.js/homePage/index.js');
const route = express.Router();

module.exports = (app)=>{

    app.use('/', route);
    route.get('/', new indexHomePage().loadIndexPage)
}
