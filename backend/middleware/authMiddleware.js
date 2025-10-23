const jwt=require('jsonwebtoken')
const Auth=require('../models/auth')

const authenticate=async(req,res,next)=>{
 const auth=req.headers.authorization
  if(!auth || !auth.startsWith('Bearer '))
    return res.status(401).json({message:'No token found'})
  
  const token=auth.split(" ")[1]
    try{
      const decoded= jwt.verify(token,process.env.JWT_SECRET)
      const user = await Auth.findById(decoded.id);
      if (!user) {
       return res.status(404).json({ message: 'User not found' });
}
req.user = user; 
      next()
    }catch(error){
      res.status(500).json(error.message)
    }
}
const authorize=(roles)=>{
  return (req,res,next)=>{
    if(!roles.includes(req.user.role))
      return res.status(403).json({message:"Forbidden"})
    next()
  }
}
module.exports={authenticate,authorize}