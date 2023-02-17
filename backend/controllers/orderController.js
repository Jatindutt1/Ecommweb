const Order = require("../modals/ordermodal")
const products = require("../modals/Productmodal");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError"); //for error


//Create new order api
exports.newOrder = catchAsyncErrors(async (req,res,next)=>{
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    }=req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt:Date.now(),
        user:req.user._id
    })

    res.status(201).json({
        success:true,
        message:"Order created succesfully",
        order
    })

});

