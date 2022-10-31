// const express = require('express');
// const router = express.Router();
const user = require("./userRouter");
const product = require("./productRouter")
module.exports = (app) => {
    user(app);
    product(app)
    // return user
}
