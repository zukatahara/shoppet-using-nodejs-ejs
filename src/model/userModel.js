const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    gender: String,


});
const userModel = mongoose.model('user', schema)
module.exports = userModel