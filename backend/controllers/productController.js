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


  /////UPDATE PRODUCT////
  exports.updateProduct = async (req, res) => {
    try {
      const {id} = req.params;
      const updates = req.body;

      //find and update the product//
      const updatedProduct = await Product.findByIdAndUpdate(id, updates, {new:true});

      if(!updatedProduct) {
        return res.status(404).json({
          success: false,
          message: "Product not available",
        });
      }

      res.status(200).json({
        success: true,
        message: "Product successfully updated",
        data: updatedProduct,
      });
    } catch (error) {
      res.status(400).json ({
        success: false,
        message: "Error while updating product",
        error: error.message,
      });
    }
  };




