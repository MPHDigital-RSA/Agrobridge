const express=require('express')
const {createContact}=require('../controllers/contactController');
const { validateContact} = require('../utils/validators');
const router=express.Router();


router.post('/',validateContact, createContact);

module.exports=router;