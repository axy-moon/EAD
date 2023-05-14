const productSchema = require('../../models/productSchema');

const addProduct = async(req,res)=>{
    const product = await new productSchema(req.body);
    const result = await product.save();
    if(result){
        res.json({
            status:"Success",
            message:"Product Insertion Done"
        })
    }
    else{
        res.json({
            status:"Failed",
            message:"Product Insertion not Done"
        })
    }
}

module.exports={
    addProduct
}