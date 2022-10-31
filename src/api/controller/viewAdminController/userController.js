const UserServices = require('../../../services/userServices')
class UserController {
    //render home page
    getHomePage = async (req, res, next) => {
        const userServices = new UserServices();
        const result = await userServices.getAllUsers();
        res.render('admin/index', { result })
    }
    // render addUserPage
    addUserPage = async (req, res, next) => {
        const result = undefined
        await res.render('signup/index', { result: result })
    }
    //add user
    addUser = async (req, res, next) => {
        // console.log(req.body)
        const userServices = new UserServices();
        await userServices.addUser(req.body);
        res.redirect('/admin/user')
    }
    //
    updateUserPage = async (req, res, next) => {
        const userServices = new UserServices();
        const result = await userServices.getOneUser(req.params.id);
        // console.log(result)
        await res.render('signup/index', { result: result })
    }
    updateUser = async (req,res,next) =>{
        // console.log(req.body) 
        const userServices = new UserServices();
        const result = await userServices.updateUser(req.body);
        res.redirect('/admin/user',)
    }
    //delete user
    deleteUser = async (req, res, next) => {
        let { id } = req.params
        const userServices = new UserServices();
        const result = await userServices.deleteOneUser(id);
        res.redirect('/admin/user',)
    }


    getProductPage = async (req, res, next) => {
        res.render('admin/shows/product')
    }
}
module.exports = UserController;