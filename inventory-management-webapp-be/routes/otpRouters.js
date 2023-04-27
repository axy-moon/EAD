const express=require('express');
const {verifyUser,verifyOtp}=require('../controllers/verifyApi');

const router=express.Router();

router.post('/verifyuser',verifyUser);

router.post('/verifyotp',verifyOtp);

module.exports=router;