const express = require('express');
const router = express.Router();

// you tried to retrieve getProducts from productController instead of getProducts
const { createProduct, searchProducts } = require('../controllers/productController');

const { getProducts } = require('../controllers/getProducts');

const { authenticate } = require('../middleware/authMiddleware')

router.post('/', authenticate, createProduct);
router.get('/', getProducts);
router.get('/search', searchProducts);
module.exports = router;