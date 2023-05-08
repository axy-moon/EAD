const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    item_category:{
        type:String,
        required:true
    },
    item_type:{
        type:String,
        required:true
    },
    purchase_cost:{
        type:Number,
        required:true 
    },
    notes:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    rent:{
        type:Boolean,
        default:false
    },
    Sales:{
        type:Boolean,
        default:false
    },
    deposit_amt:{
        type:Number,
    },
    sales_amt:{
        type:Number,
    },
    fine_amt:{
        type:Number,
    },
    createdate:{
        type:Date,
        default:Date.now
    }

})

module.exports=new mongoose.model('products',productSchema);