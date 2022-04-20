const router = require("express").Router();
const Product = require("../models/Product");
const ReviewModel = require("../models/Review");

router.post("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      let review = await ReviewModel.create(req.body);
      await product.save();
      res.status(200).json(review);
    } else {
      res.status(500).json("product not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let productId = req.params.id;
    let review = await ReviewModel.find();
    review = review.filter((review) => review.product._id == productId);
    return res.json(review);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    let reviews = await ReviewModel.find();
    if (reviews) {
      return res.json(reviews);
    }
    res.json({
      message: "reviews not found",
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let reviews = await ReviewModel.findByIdAndDelete(req.params.id);
    res.status(200).json("review has been deleted");
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/topthree", async (req, res) => {
  try {
    let plans = await ReviewModel.find()
      .sort({
        rating: -1,
      })
      .limit(3);
    return res.json(plans);
  } catch (err) {
      res.status(500).json(err)
  }
});

module.exports = router;
