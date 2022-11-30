const accountServices = require("../../../../services/account/index");
// const store = require("store2");
const cart = require("./../../viewPublicController/cart");

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}
class Account {
  getLoginHome = async (req, res) => {
    const amount = await new cart().getQuantityInCartById();
    const userId = localStorage.getItem("userId");
    res.render("account/login", { amount ,userId });
  };

  checkLogin = async (req, res) => {
    const x = req.body;
    // console.log(req.body);
    const result = await new accountServices().getOneAccount(x);
    if (result) {
      console.log(`dang nhap thanh cong`);
      //Setting localStorage Item
      const { id } = result;
      // console.log(id);
      localStorage.setItem("userId", JSON.stringify(id));
      // console.log(localStorage.getItem("userId")) === null (true);
      res.redirect("/");
    } else {
      res.redirect("/user/login");
    }
  };

  getRegisterHome = async (req, res) => {
    const amount = await new cart().getQuantityInCartById();
    const userId = localStorage.getItem("userId");
    res.render("account/register", { amount , userId});
  };

  checkRegister = async (req, res, next) => {
    // console.log(req.body)
    const account = new accountServices();
    await account.registerAccount(req.body);
    res.redirect("/");
  };
}
module.exports = Account;
