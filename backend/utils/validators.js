const {body}=require('express-validator');

// Example validator for product creation
const validateProducts=[
body('title').notEmpty().withMessage('Title of the product is require'),
body('weight').notEmpty().withMessage('Weight of the product is required'),
body('images').isArray().notEmpty().withMessage('Images must be an array of image files'),
];

const validateContact=[
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').notEmpty().withMessage('Message is required'),
];

module.exports={validateProducts,validateContact};