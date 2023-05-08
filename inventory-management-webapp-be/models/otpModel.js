const mongoose=require("mongoose");

const otpSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    }
})

module.exports=new mongoose.model('otp',otpSchema);