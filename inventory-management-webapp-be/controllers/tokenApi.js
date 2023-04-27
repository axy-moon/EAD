const schema=require('../models/userSchema');
const jwt=require('jsonwebtoken');

const postApi=async(req,res)=>{
    const result=await schema.find().select("-Password");
    return res.json(result.filter(post=>post.username==req.user.name ))
}

/*const loginApi=async(req,res)=>{
    const username=req.body.username;
    const user={name:username};
    const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken:accessToken})
}*/


const verifyUser=async(req,res)=>{
    const {id,token}=req.body;
    const olduser=await schema.findOne({_id:id});
    if(!olduser){
        return res.json({
            data:"no user found"
        })
    }
        const secret=process.env.ACCESS_TOKEN_SECRET+olduser.Password;
        try{
        if (olduser.status=="active"){
            return res.send("false");
        }
        
            const verify=jwt.verify(token,secret);
            
            return res.send("true");
        }
        catch(error){
            return res.send("false");
        }
}

module.exports={postApi,verifyUser}   
