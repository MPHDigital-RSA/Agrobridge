const express=require('express');
const router=express.Router();
const {createProduct,searchProducts}=require('../controllers/productController');
const {authenticate}=require('../middleware/authMiddleware')

router.post('/', authenticate, createProduct);
// router.get('/', getProducts);
router.get('/search', searchProducts);
module.exports = router;