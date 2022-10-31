const express = require('express');
const SignIn = require('../../controller/viewPublicController.js/signIn');
const route = express.Router();

// const  Sign
module.exports = (app) => {
    app.use('/', route);
    route.post('/', new SignIn().getResult)

    // route.post('/', (req,res)=>{
    //     console.log(`signIn-POST`)
    //     console.log(req.body)
    //     res.redirect('/')
    // })
}