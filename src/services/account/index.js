const accountModel = require("../../model/userModel");
class AccountServices {
  //register
  registerAccount = async (x) => {
    try {
      const value = new accountModel(x);
      await value.save();
    } catch (error) {
      throw error;
    }
  };

  //get Product by id
  getOneAccount = async (id) => {
    const { username, password } = id;
    // console.log(id.username);
    try {
      const result = await accountModel.findOne({
        username: username,
        password: password,
      });
      // console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = AccountServices;
