const express=require('express');

const {addProduct}=require('../../controllers/product_Controllers/productApi');

const router=express.Router();

router.post('/addProduct',addProduct);

module.exports=router;