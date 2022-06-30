/**
 * Imports
 */
const mongoose = require("mongoose");

/**
 * Schema
 */
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverImg: {
      type: String,
      required: true,
    },
    imgGallery: {
      type: Array,
      properties: [
        {
          link: {
            type: String,
          },
          alt: {
            type: String,
          },
        },
      ],
    },
    rating: {
      type: Number,
      default: 0,
    },
    category: [
      {
        type: String,
      },
    ],
    tags: [
      {
        type: String,
      },
    ],
    pricing: {
      type: Array,
      required: true,
      properties: [
        {
          cost: {
            type: Number,
          },
          perQty: {
            type: String,
          },
        },
      ],
    },
    features: {
      // eg. { ftype: size, Value: "m" }
      // eg. { ftype: color, Value: "red" }
      type: Array,
      properties: [
        {
          ftype: {
            type: String,
          },
          value: {
            type: String,
          },
        },
      ],
    },
    options: {
      type: Array,
      // eg. {  size : "m",color : "red" }
      // eg. {  size : "l",color : "blue" }
      properties: [{}],
    },
    countInStock: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    orders: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", ProductSchema);
