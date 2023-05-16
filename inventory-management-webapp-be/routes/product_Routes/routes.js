const express=require('express');

const {addProduct,getProduct,deleteProduct, getAllProduct, updateItem, getQuantity, getProductOne, uniqueCategory, uniqueItemtype}=require('../../controllers/product_Controllers/productApi');

const router=express.Router();

router.post('/addProduct',addProduct);

router.post('/getItem',getProduct);

router.post('/getItemOne',getProductOne);

router.post('/deleteItem',deleteProduct);

router.get('/fetchProductDetails',getAllProduct);

router.post('/updateItem', updateItem);

router.post('/getQuantity',getQuantity);

router.post('/uniqueCategory',uniqueCategory)

router.post('/getUniqueItemtype',uniqueItemtype);

module.exports=router;