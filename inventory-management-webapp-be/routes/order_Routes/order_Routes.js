const express = require('express');

const {orderDetails}=require('../../controllers/order_Controllers/orderApi');

const router = express.Router();

router.get('/orderDetails',orderDetails);

module.exports = router;