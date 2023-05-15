const orderSchema = require('../../models/productSchema');

const orderDetails = async(req,res)=>{
    console.log(req.body.item_category,req.body.item_type,quantity);
    const result = await orderSchema.find({
        item_category:req.body.item_category,
        item_type:req.body.item_type,
        quantity:quantity,
        purchase_cost:purchase_cost
    })
    if(result){
        res.json({
            result
        })
    }
    else{
       res.json({
            message:"Failed to fetch order details"
       })
    }
}

module.exports = {
    orderDetails
}
