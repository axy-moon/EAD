const otpSchema=require('../models/otpModel');
const Schema=require('../models/userSchema');
const bcrypt=require('bcrypt');

const verifyUser=async(req,res)=>{
    console.log(req.body)
    const User=await Schema.findOne({username:req.body.username});
    if(!User){
        console.log(user);
        res.json({
            data:"User not found"
        })
    }
    else{
        res.send("Verified")
    }
}


const verifyOtp=async(req,res)=>{
    try{

            
            const User=await otpSchema.findOne({username:req.body.username});
            
            if(User.length<=0){
                 throw new Error("Account doesn't exist");
            }
            else{
                const {Expired}=User;
                if(Expired<Date.now()){
                    await otpSchema.deleteMany({username:req.body.username});
                    throw new Error("OTP Expired");
                }
                else{
                    const pass_otp=req.body.otp;
                    
                    console.log(User.otp);
                    console.log(pass_otp);
                    if(await bcrypt.compare(pass_otp,User.otp)){
                        res.json({
                            data:"valid"
                        })
                        await otpSchema.deleteMany({username:req.body.username});
                    }
                    else{
                        res.json({
                            data:"otp not verified"
                        })
                    }
                }
            }
            

     }
     catch(err){
         res.json({
            message:err.message
         })
     }
    
}

module.exports={verifyUser,verifyOtp}