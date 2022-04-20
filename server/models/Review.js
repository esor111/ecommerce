const mongoose = require('mongoose')

const reviewSchema =new mongoose.Schema({
	review: {
		type: String,
		required: [true, "review is required"]
	},

	rating: {
		type: Number,
		min: 1,
		max: 10,
		required: [true, "rating is required"]
	}, 

	createdAt: {
		type: Date,
		default: Date.now()
	},
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'need a user to review']
    },
    product:{
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [true, 'need tpo specify the plan to review']
    }
});

reviewSchema.pre(/^find/, function(next){
    this.populate({
        path: 'user',
        select: `email username img`
    }).populate('product')
    next()
})


const ReviewModel = mongoose.model("ReviewModel", reviewSchema);

module.exports= ReviewModel

