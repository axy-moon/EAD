const schema=require('../models/userSchema');
const jwt=require('jsonwebtoken');
const otpGenerator=require('otp-generator');
const nodemailer=require("nodemailer");
const Otp=require('../models/otpModel');
const bcrypt=require('bcrypt');



const sendMail=async(req,res)=>{
    try{


        const email=req.body.username;
        console.log(email);
        const choice=req.body.choice;
        var content;

        const olduser=await schema.findOne({username:email});
        console.log(olduser);
        if(!olduser){
          res.json({
            message:"no user found"
          })
        }

        if(choice==1){
            const secret = process.env.ACCESS_TOKEN_SECRET+olduser.Password;
            const token=jwt.sign({email:olduser.username,id:olduser._id},secret,{
                expiresIn:"1m",
            })
            content=`http://localhost:3000/SetPassword/${olduser._id}/${token}`;
            console.log(content);
        }

        if(choice== 2 ){
            content= otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false });
            console.log(content);
            bcrypt.hash(content,0,(err, hash)=>{
              if(err){
                  next(err)
              }
              else{
                 
                 const result=async()=>{
                  const otp=new Otp({username:olduser.username,otp:hash});
                  const res= await otp.save()
                };
                 result();
                 if(result){
                  console.log(result)
                 }
              }
            })

        }
        
       var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'rm3956709@gmail.com',
              pass: 'qsxmmfcytwfrwsyq'
            }
          });
          
          var mailOptions = {
            from: 'rm3956709@gmail.com',
            to: email,
            subject: 'Sending Email',
            text: content
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              res.json({
                "status":"Success",
                "message":content
              })
            }
          });
    }
    catch(e){
        console.log(e);
    }
}

module.exports={sendMail}