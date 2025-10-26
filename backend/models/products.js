// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    weight: {
      type: String,
      required: true,
    },
    // category: {
    //   type: String,
    //   required: true,
    // },
    images: {
      type: Object,
      of: String
    },

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
      required: true,
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
