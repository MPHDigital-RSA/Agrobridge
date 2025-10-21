// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required:true,
      trim: true,
    },
    weight: {
      type: Number,
      required:true,
    },
    // category: {
    //   type: String,
    //   required: true,
    // },
    images: {
      type: Array,
      of: String
    },
    
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
  },
},
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Product", productSchema);
