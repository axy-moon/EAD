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

const getProductOne=async(req,res)=>{
    console.log(req.body);
    const product = await productSchema.findOne({_id:req.body._id});
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
            message: "Failed to fetch product"
        })
    }
}

const getAllProduct=async(req,res)=>{
    const product = await productSchema.find();
    if(product){
        console.log("ISIDE getAllProduct API"+product);
        res.json({
            product
        })
    }
    else{
        res.json({
            message: "Failed to fetch product"
        })
    }
}

const deleteProduct=async(req,res)=>{
    console.log(req.body._id);
    const product = await productSchema.deleteOne({_id:req.body._id});
    if(product){
        res.json({
            message:"Successfully deleted"
        })
    }
    else{
        res.json({
            message:"Failed to fetch product"
        })
        }
}

const updateItem=async(req,res)=>{
    console.log("Update products",req.body);
    
    const item_category = req.body.item_category; 
    const item_type = req.body.item_type;
    const quantity = req.body.quantity;

    const result = await productSchema.updateOne(
        {
            item_category:item_category,
            item_type:item_type
        },
        {
            $set:
            {
                quantity:quantity
            }
        }
    )
    if(result){
        res.json({
            status:"success",
            message:"updated successfully"
        })
    }
    else{
        res.json({
            status:"failure",
            message:"Failed to update product"
        })
        }
}

const getQuantity=async(req,res)=>{
    console.log(req.body.item_category);
    console.log(req.body.item_type);
    const product = await productSchema.find({item_category:req.body.item_category,item_type:req.body.item_type,_id:req.body._id}).select("quantity");
    console.log(product)
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
    getProduct,
    deleteProduct,
    getAllProduct,
    updateItem,
    getQuantity,
    getProductOne
}