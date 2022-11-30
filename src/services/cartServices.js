const cartModel = require("../model/cartModel");
const productModel = require("../model/productModel");
class CartServices {
  //add user
  addToCart = async (x) => {
    // console.log(x);
    try {
      const existedProduct = await cartModel.findOne(x);
      if (!existedProduct) {
        const value = new cartModel(x);
        await value.save();
      }
      return;
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

  //get user by id
  getCartByUserId = async (id) => {
    console.log(id);
    try {
      // console.log('id', id)
      const result = await cartModel.find({ userID: id });
      // console.log('result',result )
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
    // console.log(result)
    return result;

    // console.log('x', x)
    //    console.log(x);
  };

  //delete Item In Cart
  deleteItemInCart = async (value) => {
    await cartModel.findOneAndDelete(value);
  };
  deleteCartWhenAddOrder = async (id) => {
    try {
      const result = await cartModel.deleteMany({ userID: id });
      // console.log("result", result);
    } catch (error) {
      throw error;
    }

    // return result;
  };
}

module.exports = CartServices;
