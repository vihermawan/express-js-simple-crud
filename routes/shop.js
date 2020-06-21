const path = require('path');

const express = require('express');

const shopContoller = require('../controllers/shop')

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', shopContoller.getIndex);

router.get('/products', shopContoller.getProduct);

router.get('/checkout', shopContoller.getCheckOut);

router.get('/orders',shopContoller.getOrders);

router.get('/cart', shopContoller.getCart);

module.exports = router;
