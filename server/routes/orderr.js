/** @format */
const router = require("express").Router();
const Order = require("../models/Order");
const {
    verifytokenAdmin,
     verfifyToken,
} = require("../routes/VerifyToken");
const stripe = require("stripe")(
  "sk_test_51KKzZJSEaqxFM7FOJhD4GQedazKFpoeODOE4Qsh6BdhnJsLB07EofcIl0085b1VLx2Rpvpk4fp8kUfiy8nSTXZDh001GblO3vA"
);
const { v4: uuidv4 } = require("uuid");

//POATT ORDER
router.post("/payment", verfifyToken, async (req, res) => {
  const { token, subtotal, user, cartitems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      res.status(200).json("payment done");
    } else {
      res.status(401).json("payment failed");
    }
  } catch (err) {
    res.json({ message: "something went wrong" +err });
  }
});


router.put("/:id", verifytokenAdmin, async(req, res)=>{
try{
    let order = await Order.findByIdAndUpdate(req.params.id, {

        $set: req.body
        }, {new: true})
        
        res.status(500).json(order)
        
}catch(err){
    res.status(500).json(err)
}

})



//POATT ORDER
router.post("/", verfifyToken, async(req, res)=>{
try{
    const order = new Order(req.body)
    const saveorder = await order.save()
    console.log(saveorder)
    console.log(saveorder)
    res.status(200).json(saveorder)

}catch(err){
    res.status(500).json(err)
}
})



//DELETEORDER
router.delete("/:id", verifytokenAdmin,async(req, res)=>{
    try{
         await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted")
        
    }catch(err){
        res.status(500).json(err)
    }
})


//GET PARTICULAR ORDER
router.get('/:id', verifytokenAdmin,async(req, res)=>{
try{
    const order = await Order.findOne(req.params.id)
res.status(200).json(order)

}catch(err){
    res.status(500).json(err)
 
}

})


//GET ALL ORDER
router.get('/', verifytokenAdmin,async(req, res)=>{
try{const order = await Order.find()
res.status(200).json(order)
}catch(err){
    res.status(500).json(err)
}
})


// GET MONTHY INCOME

router.get("/income", verifytokenAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// router.get("/income", verifytokenAdmin, async(req, res)=>{
// const date = new Date();
// const lastMonth= new Date(date.setMonth(date.getMonth()-1))
// const previousMonth =new Date(new Date().setMonth(lastMonth.getMonth() -1))
// try{
// const income = await Order.aggregate([
//     {$match: {createdAt: {$gte: previousMonth}}},
 
//     {
//         $project:{
//             month: {$month: "$createdAt"},
//             sales: "$amount",
//         },

//         $group:{
//             _id: "$month",
//             total: {$sum: "$sales"}
//         }
//     },
// ])
// res.status(200).json(income)

// }catch(err){
//     res.status(200).json(err)
// }


// })




module.exports = router;
