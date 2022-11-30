const mongoose = require("mongoose");

const schema = mongoose.Schema({
  orderID: String,
  userID: String,
  infoReceiver: Object,
  products: Array,
  status: {
    type: Number,
    Default: 1,
  },
});
const orderModel = mongoose.model("order", schema);
module.exports = orderModel;
