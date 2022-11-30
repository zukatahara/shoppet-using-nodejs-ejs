const mongoose = require("mongoose");

const schema = mongoose.Schema({
  userID: String,
  productID: String,
  quantity: {
    type: Number,
    default: 1
  },
});
const cartModel = mongoose.model("cart", schema);
module.exports = cartModel;
