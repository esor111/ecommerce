/** @format */
const router = require("express").Router();
const Cart = require("../models/cart");
const {
	verfifyToken,
	verifytokenandauth,
	verifytokenAdmin,
} = require("../routes/VerifyToken");

router.post("/", verfifyToken, async (req, res) => {
	const newCart = new Cart(req.body);
	try {
		const savewCart = await newCart.save();
		res.status(200).json(savewCart);
	} catch (err) {
		res.status(500).json(err);
	}
});






router.put("/:id", verfifyToken, async (req, res) => {
	try {
		let cart = await Cart.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);

		res.status(200).json(cart);
	} catch (err) {
		res.status(500).json(err);
	}
});





router.delete("/:id", verifytokenandauth, async (req, res) => {
	try {
		await Cart.findByIdAndDelete(req.params.id);
		res.status(200).json("user has been deleted");
	} catch (err) {
		res.status(500).json(err);
	}
});

//show ????????????????

router.get("/:id", verifytokenandauth, async (req, res) => {
	try {
		const cart = await Cart.findById(req.params.id);
		res.status(200).json(cart);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/", verifytokenandauth, async (req, res) => {
	try {
		const cart = await Cart.find();
		res.status(200).json(cart);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
