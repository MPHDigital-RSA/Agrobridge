// ==================== CONTROLLERS/PRODUCTCONTROLLER.JS
const Product = require("../models/products");

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      message: "Products successsfully retrieved",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fetching product unsuccessful",
      error: error.message,
    });
  }
};