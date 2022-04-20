const express = require("express");
const app = express()
const mongoose =require("mongoose")
const cors = require("cors")

const dotenv =require('dotenv')
const router = require('./routes/auth')
const reviewRouter = require("./routes/review")
const UserRouter = require("./routes/user")
const ProductRoute = require("./routes/product")
const Cart = require("./routes/cart")
const order = require("./routes/orderr")
const Stripe =require("./routes/Stripe")
const multer =require('multer')
const path = require('path')

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("database connected")).catch(err=>console.log(err))
app.use(cors())


//USING THE MULTER

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "images")
    },

    filename:(req, file, cb)=>{
        cb(null, req.body.name)
    },

});


const upload =multer({storage: storage})

app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json("file has been uploaded")
})



app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")))

app.use("/api/auth", router)
app.use("/api/reviews", reviewRouter)
app.use("/api/users", UserRouter)
app.use("/api/products",ProductRoute)
app.use("/api/carts", Cart)
app.use("/api/orders", order)
app.use("/api/checkout", Stripe)

// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
// });



app.listen(process.env.PORT || 5000, ()=>console.log("backend server is runing"))
