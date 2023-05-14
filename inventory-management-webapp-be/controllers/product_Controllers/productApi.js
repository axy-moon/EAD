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

const getProduct=async(req,res)=>{
    console.log(req.body.item_category);
    console.log(req.body.item_type);
    const product = await productSchema.find({item_category:req.body.item_category,item_type:req.body.item_type});
    if(product){
        res.json({
            product
        })
    }
    else{
        res.json({
            message:"Failed to fetch product"
        })
        }
}

module.exports={
    addProduct,
    getProduct
}