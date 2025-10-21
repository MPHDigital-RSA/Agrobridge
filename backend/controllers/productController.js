// ==================== CONTROLLERS/PRODUCTCONTROLLER.JS
const Product = require("../models/products");
const { uploadImage} = require("./uploadController");


//  Create new product (seller only)
  exports.createProduct = async (req, res) => {
    try {
      const { images, ...productPayload } = req.body;
      const uploadedFiles = [];

      if (images) {
        for (const file of images) {
          const result = await uploadImage(file);
          uploadedFiles.push(result.documentLink);
        }
      }
      const productData = {
        ...productPayload,
        images: uploadedFiles,
        // seller: req.user.id,
      };

      const product = new Product(productData);
      await product.save();

      res.status(201).json({
        success: true,
        message: "Product created successfully and pending approval",
        data: product,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Error creating product",
        error: error.message,
      });
    }
  };
// searching product by title
exports.searchProducts = async (req, res) => {
  try {
    const { title } = req.query;

    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const product = await Product.find({ title: { $regex: title, $options: "i" } })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    if (product.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No product found with the given title",
      });
    }
    res.status(200).json({
    success: true,
    page,
    totalResults: product.length,
    data: product,
});
  }catch (error) {
      res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
