const express=require('express')
const router=express.Router()
const {signUpUser,signInUser}=require('../controllers/authController')
//Routes fot authentication
router.post('/signup',signUpUser)
router.post('/login',signInUser)

module.exports=router