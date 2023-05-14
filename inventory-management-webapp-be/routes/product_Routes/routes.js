const express=require('express');

const {addProduct,getProduct,deleteProduct}=require('../../controllers/product_Controllers/productApi');

const router=express.Router();

router.post('/addProduct',addProduct);


router.post('/getItem',getProduct);

router.post('/deleteItem',deleteProduct);

module.exports=router;