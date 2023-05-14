const express=require('express');

const {addProduct,getProduct}=require('../../controllers/product_Controllers/productApi');

const router=express.Router();

router.post('/addProduct',addProduct);


router.post('/getItem',getProduct);

module.exports=router;