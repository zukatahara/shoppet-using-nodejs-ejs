
class ProductDetail {
    getOneProduct = (req,res,next)=>{
        res.send({ProductDetail: req.params});
    }
}
module.exports = ProductDetail;