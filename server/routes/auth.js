/** @format */

const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASSWORD_SECRECT
		).toString(),
	});

	try {
		const saveduser = await newUser.save();
		res.status(200).json(saveduser);
	} catch (err) {
		res.status(500).json(err);
	}
});





//LOGIN

router.post("/login", async (req, res) => {
	let user = await User.findOne({ username: req.body.username });
	if (user) {
		try {
			const hashedpassword = CryptoJS.AES.decrypt(
				user.password,
				process.env.PASSWORD_SECRECT
			);
			const password = hashedpassword.toString(CryptoJS.enc.Utf8);
			if (password !== req.body.password) {
				res.status(403).json("wrong crendecial");
			} else {
				const accesstoken = jwt.sign({ id: user.id, isAdmin: user.isAdmin, }, process.env.THE_SECRECT, {expiresIn: "3d"});

				const { password, ...others } = user._doc;
				res.status(200).json({ ...others, accesstoken });
			}
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json("please register first");
	}
});

module.exports = router;

