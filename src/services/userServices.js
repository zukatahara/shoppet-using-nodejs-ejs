const userModel = require("../model/userModel")
class UserServices {

    //add user
    addUser = async (x) => {
        try {
            const value = new userModel(x);
            await value.save()
        } catch (error) {
            throw error
        }
    }

    //get all user
    getAllUsers = async () => {
        try {
            const result = await userModel.find({});

            return result;
        } catch (error) {
            throw error;
        }
    }

    //get user by id
    getOneUser = async (id) => {

        try {
            // console.log('id', id)
            const result = await userModel.find({ _id: id });
            // console.log(result)
            return result;
        } catch (error) {
            throw error;
        }
    }
    //update user
    updateUser = async (x) => {

        let { id } = x;
        const result = await userModel.findByIdAndUpdate({ _id: id }, x);
        return result


        // console.log('x', x)
        //    console.log(x);
    }

    //delete user
    deleteOneUser = async (id) => {
        await userModel.findByIdAndDelete(id);

    }
}

module.exports = UserServices;