const productModel = require("../model/productModel")
class ProductServices {

    //add product
    addProduct = async (x) => {
        try {
            const value = new productModel(x);
            await value.save()
        } catch (error) {
            throw error
        }
    }

    //get all Product
    getAllProducts = async () => {
        try {
            const result = await productModel.find({});

            return result;
        } catch (error) {
            throw error;
        }
    }

    //get Product by id
    getOneProduct = async (id) => {

        try {
            // console.log('id', id)
            const result = await productModel.find({ _id: id });
            // console.log(result)
            return result;
        } catch (error) {
            throw error;
        }
    }
    //update Product
    updateProduct = async (x) => {
        const { id } = x
        // let { id } = x;
        const result = await productModel.findByIdAndUpdate({ _id: id }, x);
        //  console.log('result', result)
        return result


        // console.log('x', x)
        //    console.log(x);
    }

    //delete Product
    deleteOneProduct = async (id) => {
        const result = await productModel.findByIdAndDelete(id);
        if (!result) {
            throw Error;
        }
        return result;

    }
}

module.exports = ProductServices;