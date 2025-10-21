const express=require('express');
const router=express.Router();
const {createProduct,searchProducts}=require('../controllers/productController');

router.post('/', createProduct);
router.get('/search',searchProducts);
module.exports=router;