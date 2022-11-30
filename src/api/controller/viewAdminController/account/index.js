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
    res.render("account/login", { amount, userId });
  };

  checkLogin = async (req, res) => {
    const x = req.body;
    // console.log(req.body);
    const result = await new accountServices().getOneAccount(x);
    console.log("result", result);
    if (result) {
      console.log(`dang nhap thanh cong`);
      //Setting localStorage Item
      const { id } = result;
      localStorage.setItem("userId", JSON.stringify(id));
      const { role } = result;
      // console.log("role", role);
      if (role === 1) {
        res.redirect("/");
      } else {
        res.redirect("/admin");
      }
      // console.log(id);
      
      // console.log(localStorage.getItem("userId")) === null (true);
    } else {
      res.redirect("/user/login");
    }
  };

  getRegisterHome = async (req, res) => {
    const amount = await new cart().getQuantityInCartById();
    const userId = localStorage.getItem("userId");
    res.render("account/register", { amount, userId });
  };

  checkRegister = async (req, res, next) => {
    // console.log(req.body)
    const account = new accountServices();
    await account.registerAccount(req.body);
    res.redirect("/user/login");
  };
}
module.exports = Account;
