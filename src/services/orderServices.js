// const cartModel = require("../model/cartModel");
// const productModel = require("../model/productModel");

const orderModel = require("../model/orderModel");
class OrderServices {
  //add user
  addToOrder = async (x) => {
    try {
      const value = new orderModel(x);
      await value.save();
    } catch (error) {
      throw error;
    }
  };
  //get all user
  // getAllUsers = async () => {
  //     try {
  //         const result = await cartModel.find({});

  //         return result;
  //     } catch (error) {
  //         throw error;
  //     }
  // }
  //get Order by userId
  getOrderByUserId = async (id) => {
    // console.log(id);
    try {
      // console.log('id', id)
      const result = await orderModel.find({ userID: id });
      // console.log("result order by userId", result);
      return result;
    } catch (error) {
      throw error;
    }
  };
  getOrderByOrderId = async (id) => {
    // console.log(id);
    try {
      // console.log('id', id)
      const result = await orderModel.find({ orderID: id });
      // console.log("result order by orderID", result[0].products[0]);
      // console.log("result order by orderID", result);
      return result;
    } catch (error) {
      throw error;
    }
  };
  //update user
  updateCartItem = async (x, y) => {
    const recentItem = await cartModel.findOne(x);
    const { quantity } = recentItem;
    let setQuantity = quantity + y;
    if (setQuantity <= 1) setQuantity = 1;
    const result = await cartModel.findOneAndUpdate(x, {
      quantity: setQuantity,
    });
    return result;
  };

  //delete user
  deleteItemInCart = async (value) => {
    await cartModel.findOneAndDelete(value);
  };
}

module.exports = OrderServices;
