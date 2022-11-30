const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  gender: String,
  role: {
    type: Number,
    default: 1,
  },
});
const userModel = mongoose.model("user", schema);
module.exports = userModel;
