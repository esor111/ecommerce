/** @format */
const router = require("express").Router();
const Product = require("../models/Product");
const { verifytokenAdmin, verifytokenandauth } = require("../routes/VerifyToken");

router.post("/", verifytokenAdmin, async (req, res) => {
	const newProduct = new Product(req.body);
	try {
		let saveProduct = await newProduct.save();
		res.status(200).json(saveProduct);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put("/:id", verifytokenAdmin, async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);

		let saveProdut = await product.save();
		res.status(200).json(saveProdut);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete("/:id", verifytokenAdmin, async (req, res) => {
	try {
		let product = await Product.findByIdAndDelete(req.params.id);
		res.status(200).json(product._id);
	} catch (err) {
		res.status(500).json(err);
	}
});
router.get("/", async (req, res) => {
	const qNew = req.query.new;
	const qCategory = req.query.category;
	try {
		let products;

		if (qNew) {
			products = await Product.find().sort({ createdAt: -1 }).limit(2);
		} else if (qCategory) {
			products = await Product.find({
				categories: {
					$in: [qCategory],
				},
			});
		} else {
			products = await Product.find();
		}

		res.status(200).json(products);
	} catch (err) {
		res.json(err);
	}
});





router.get("/:id",  async (req, res) => {
	try {
		let product = await Product.findById(req.params.id);
		res.status(200).json(product)
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
