const express = require("express");
const router = express.Router();
// const UserController = require('./../../controller/userController')
const UserController = require("../../../controller/viewAdminController/userController.js");

module.exports = (app) => {
  app.use("/", router);
  router.get("/user", (req, res) => {
    res.send(`admin-user`);
  });
  // app.use('/admin/user', router);
  // router.get('/', new UserController().getHomePage);
  // router.get('/add', new UserController().addUserPage);
  // router.post('/add', new UserController().addUser);
  // router.get('/update/:id', new UserController().updateUserPage);
  // router.post('/update', new UserController().updateUser);
  // router.get('/delete/:id', new UserController().deleteUser);
  return router;
};
