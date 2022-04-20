/** @format */

const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
	{
		uderId: {
			type: String,
			required: true,
		},

		product: [
			{
				productId: {
                    type: String
                },

                quantity: {
                    type: Number,
                    default: 1,
                }
			},
		],
        amount: { type: String, required: true},

        address:{type: Object, required: true},
        status: {type: String, status: "pending"}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);





