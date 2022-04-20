/** @format */
const router = require("express").Router();
const User = require("../models/User");
const {
	verifytokenandauth,
	verifytokenAdmin,
} = require("../routes/VerifyToken");
const CryptoJS = require("crypto-js");

router.put("/:id", verifytokenandauth, async (req, res) => {
	try {
		if (req.body.password) {
			req.body.password = CryptoJS.AES.encrypt(
				req.body.password,
				process.env.SECRECT_PASSWORD
			).toString();
		}

		let updateUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);

		res.status(200).json(updateUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete("/:id", verifytokenandauth, async (req, res) => {
	try {
		let user = await User.findByIdAndDelete(req.params.id);
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/:id", verifytokenAdmin, async (req, res) => {

	try {
		let user = await User.findById(req.params.id);
		const { password, ...other } = user._doc;
		res.status(200).json(other);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/", verifytokenAdmin, async (req, res) => {
	try {
		const query = req.query.new;
    
		let user = query? await User.find().sort({_id: -1}).limit(4) : await User.find();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});


//GET USER STATUS

// router.get("/stats", verifytokenAdmin, async (req, res) => {
// 	const date = new Date();
// 	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
// 	try {
// 	  const data = await User.aggregate([
// 		{ $match: { createdAt: { $gte: lastYear } } },
// 		{
// 		  $project: {
// 			month: { $month: "$createdAt" },
// 		  },
// 		},
// 		{
// 		  $group: {
// 			total: { $sum: 1 },
// 		  },
// 		},
// 	  ]);
// 	  res.status(200).json(data)
// 	} catch (err) {
// 	  res.status(500).json(err);
// 	}
//   });





router.get("/stats", verifytokenAdmin, async (req, res) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
	try {
	  const data = await User.aggregate([
		{ $match: { createdAt: { $gte: lastYear } } },
		{
		  $project: {
			month: { $month: "$createdAt" },
		  },
		},
		{
		  $group: {
			_id: "$month",
			total: { $sum: 1 },
		  },
		},
	  ]);
	  res.status(200).json(data)
	} catch (err) {
	  res.status(500).json(err);
	}
  });
  




module.exports = router;
