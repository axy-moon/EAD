const schema=require('../models/userSchema');
const jwt=require('jsonwebtoken');

const postApi=async(req,res)=>{
    // const token=req.body.token;
    // console.log(token);
    // const verify=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
    // const result=await schema.findOne({username:verify.username}).select("-Password");
    return res.send(result._id);
    //return res.json(result.filter(post=>post.username==req.body.token))
}

/*const loginApi=async(req,res)=>{
    const username=req.body.username;
    const user={name:username};
    const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken:accessToken})
}*/


const verifyUser=async(req,res)=>{
    
    const token=req.body.token;
    console.log("inside verify token",token);
    try{
        const check=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        const result=await schema.findOne({username:check.username}).select("-Password");
        const olduser=await schema.findOne({_id:result.id});
        if(!olduser){
            return res.send("No user found")
        }
        if (olduser.status=="active"){
            return res.send("Already Set your password");
        }
        
        return res.send(olduser._id);
        
    }catch(err){
        res.send("Link Expired");
    }
    
}

module.exports={postApi,verifyUser}   
