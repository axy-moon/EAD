const mongoose=require("mongoose");

const otpSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default:Date.now(),
    },
    Expired:{
        type:Date,
        default:Date.now() + 3600000
    }
})

module.exports=new mongoose.model('otp',otpSchema);