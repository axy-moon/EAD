const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    Password:
    {
        type: String,
        //required:true
    },
    roles:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'Pending'
    }
})

/*userSchema.pre('save',function (next){
    if(this.isModified('Password')){
        bcrypt.hash(this.Password,0,(err, hash)=>{
            if(err){
                next(err)
            }
            else{
                this.Password = hash;
                console.log('from schema encryption',hash)
                next();
            }
        })
    }
})*/ 

module.exports=new mongoose.model('users',userSchema);