/**
 * Imports
 */
const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const Product = require("../models/Product");

// let dProduct = {
// "title": "Heyiaaa",
// "description": "this is product a great product mixer grinder",
// "coverImg": "/api/images/2.png",
// "imgGallery": [
//   {
//     "link": "/api/images/2.png",
//   },
//   {
//     "link": "/api/images/2.png",
//   },
// ],
// "rating": "3.5",
// "category": ["Electronics"],
// "tags": ["Mixer"],
// "pricing": [
//   {
//     "cost":"45",
//     "perQty": "item",
//   },
// ],
// "features": [{ "ftype": "color", "Value": "red" }],
// "options": [{ "size": "l", "color": "blue" }],
// "countInStock": "6",
// };

router.post(
  "/add",
  [
    check("title", "Product Title is required").notEmpty(),
    check("description", "Product Description is required").notEmpty(),
    check("coverImg", "Cover Img is required").notEmpty(),
    check("pricing", "Pricing is required").notEmpty(),
    check("countInStock", "Count in Stock is required").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        errors: errors.array(),
        errorMsg: "Read logs or full response",
      });
    }

    var {
      title,
      description,
      coverImg,
      imgGallery,
      rating,
      category,
      tags,
      pricing,
      features,
      options,
      countInStock,
      discount,
      orders,
      numReviews,
      reviews,
      // } = dProduct;
    } = req.body;

    if (category) {
      category = category.map((cat) => cat.toLowerCase());
    }

    try {
      let product = new Product({
        title,
        description,
        coverImg,
        imgGallery,
        rating,
        category,
        tags,
        pricing,
        features,
        options,
        countInStock,
        discount,
        orders,
        numReviews,
        reviews,
      });
      // console.log(product);
      // let resl;
      const resl = await product.save();
      console.log(resl);
      return res.status(200).send({
        msg: "Product Added Successfully",
        productId: resl._id,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        errors: errors.array(),
        errorMsg: err.message,
      });
    }
  }
);

router.patch(
  "/:id",
  [
    check("title", "Product Title is required")
      .if(check("countInStock").exists())
      .exists({ checkFalsy: true }),
    check("description", "Product Description is required")
      .if(check("countInStock").exists())
      .exists({ checkFalsy: true }),
    check("coverImg", "Cover Img is required")
      .if(check("countInStock").exists())
      .exists({ checkFalsy: true }),
    check("pricing", "Pricing is required")
      .if(check("countInStock").exists())
      .exists({ checkFalsy: true }),
    check("countInStock", "Count in Stock is required")
      .if(check("countInStock").exists())
      .exists({ checkFalsy: true }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        errors: errors.array(),
        errorMsg: "Read logs or full response",
      });
    }

    const { id } = req.params;
    if (!id) {
      return res.send({
        errorMsg: "Invalid Product Id",
      });
    }
    const updateObj = req.body;
    if (updateObj.category) {
      updateObj.category = updateObj.category.map((cat) => cat.toLowerCase());
    }

    try {
      const resl = await Product.findByIdAndUpdate(id, { ...updateObj });
      console.log(resl);
      return res.status(200).send({
        msg: "Product Updated Successfully",
        result: resl,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        errors: errors.array(),
        errorMsg: err.message,
      });
    }
  }
);

router.delete("/:id", [], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
      errorMsg: "Read logs or full response",
    });
  }

  const { id } = req.params;
  if (!id) {
    return res.send({
      errorMsg: "Invalid Product Id",
    });
  }

  try {
    let resl = await Product.findByIdAndDelete(id);

    if (resl === null) {
      return res
        .status(402)
        .send({ errorMsg: "No product was found with the given Id" });
    }
    return res.status(200).send({
      msg: "Product Deleted Successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      errors: errors.array(),
      errorMsg: err.message,
    });
  }
});

router.get("/search/:searchTerm", [], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
      errorMsg: "Read logs or full response",
    });
  }

  const { searchTerm } = req.params;

  try {
    console.log(req.params);
    const aggregation = [
      {
        $search: {
          index: "search",
          text: {
            query: searchTerm,
            path: {
              wildcard: "*",
            },
            fuzzy: {},
          },
        },
      },
    ];
    const resl = await Product.aggregate(aggregation);
    console.log(resl);
    return res.status(200).send({
      msg: "Search Successfull",
      found: resl.length,
      results: resl,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      errors: errors.array(),
      errorMsg: err.message,
    });
  }
});

router.get("/autocomplete/:searchTerm", [], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
      errorMsg: "Read logs or full response",
    });
  }

  const { searchTerm } = req.params;

  try {
    const aggregation = [
      {
        $search: {
          index: "autoComplete",
          autocomplete: {
            query: searchTerm,
            path: "title",
            tokenOrder: "sequential",
          },
        },
      },
      {
        $limit: 10,
      },
      {
        $project: {
          title: 1,
        },
      },
    ];
    const resl = await Product.aggregate(aggregation);
    return res.status(200).send({
      msg: "Auto-Complete Successfull",
      found: resl.length,
      results: resl,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      errors: errors.array(),
      errorMsg: err.message,
    });
  }
});

router.get("/category/:category", [], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
      errorMsg: "Read logs or full response",
    });
  }

  let { category } = req.params;

  try {
    console.log(req.params);
    category = category.toLowerCase();
    const resl = await Product.find({ category: category });

    console.log(resl);
    return res.status(200).send({
      msg: "Search Successfull",
      found: resl.length,
      results: resl,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      errors: errors.array(),
      errorMsg: err.message,
    });
  }
});

module.exports = router;
