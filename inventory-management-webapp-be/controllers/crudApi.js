const schema=require('../models/userSchema');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

const addUser=async(req,res)=>{
    try{
        const data=new schema(req.body);
        const result=await data.save();
        if(!result){
            res.json({
                status:"Failed",
                message:"Not able to add User Detail"
            })
        }
        else{
            res.json({
                status:"Success",
                message:"Successfully added User Detail"
            })

        }
    }catch(e){
        console.log(e);
    }
}

const updateUser=async(req,res)=>{
    
    try{        
    const user=req.body._id;
    var pass=req.body.Password;

    bcrypt.hash(pass,0,(err, hash)=>{
        if(err){
            next(err)
        }
        else{
            var myQuery={_id:user};
            var query={$set:{_id:user,Password:hash}};
            var query1={$set:{_id:user,status:"active"}};
            const result=async()=>{const res=await schema.updateOne(myQuery,query)};
            const result1=async()=>{const res=await schema.updateOne(myQuery,query1)};
            result(); 
            result1();
            if(result){
                res.json({
                    message:"Successfully Updated"
                })
            }
            else{
                res.json({
                    message:"Not able to Update"
                })
            }
        }
    })
    }catch(err){
        console.log(err);       
    }
    
}

const updateUserEmail=async(req,res)=>{
    
    try{        
    const user=req.body.username;
    var pass=req.body.Password;

    bcrypt.hash(pass,0,(err, hash)=>{
        if(err){
            next(err)
        }
        else{
            var myQuery={username:user};
            var query={$set:{username:user,Password:hash}};
            const result=async()=>{const res=await schema.updateOne(myQuery,query)};
            result(); 
            if(result){
                res.json({
                    message:"Successfully Updated"
                })
            }
            else{
                res.json({
                    message:"Not able to Update"
                })
            }
        }
    })
    }catch(err){
        console.log(err);       
    }
    
}


const deleteUser=async(req,res)=>{
    try{
        const result=await schema.deleteOne({username:req.body.username});
        if(result){
            res.json({
                message:"Deleted Successfully",
            })
        }
        else{
            res.json({
                message:"Failed to Delete a Record",
            })
        }  
    }catch(e){
        console.log(e);
    }
}


const fetchallUser=async(req,res)=>{
    try{
        const result=await schema.find().select("-Password");
        if(result){
            res.json({
                result
            })
        }
        else{
            res.json({
                message:"Failed to fetch data",
            })
        }    
    }catch(e){
        console.log(e);
    }
}

const fetchUser=async(req,res)=>{
    try{
        const result=await schema.findOne({username:req.body.username}).select("-Password");
        if(result){
            res.json({
                result
            })
        }
        else{
            res.json({
                message:"Failed to fetch data",
            })
        }    
    }
    catch(e){
        console.log(e);
    }
}

const login=async(req,res)=>{
    try{
        const email=req.body.username;
        console.log(email);
        const result=await schema.findOne({username:email});
        console.log(result);
        if(result && await bcrypt.compare(req.body.Password,result.Password) ){
            console.log("inside login ")
            const user={username:email};
            const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
            res.json({
                data:accessToken
            })
            
        }
        else{
            res.json({
                data:"false",
            })
        }    
    }
    catch(e){
        console.log(e);
    }
}





module.exports={
    addUser,
    updateUser,
    deleteUser,
    fetchallUser,
    fetchUser,
    login,
    updateUserEmail
}