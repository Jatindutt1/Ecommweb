const Order = require("../modals/ordermodal")
const products = require("../modals/Productmodal");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError"); //for error


//Create new order api
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id
    })

    res.status(201).json({
        success: true,
        message: "Order created succesfully",
        order
    })

});

//get single user order
exports.singleOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate("user", "firstName email")
    if (!order) {
        return next(new ErrorHandler("order not found with this Id", 404))

    }

    res.status(200).json({
        success: true,
        order
    })
})

//view my all orders
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id })
    res.status(200).json({
        success: true,
        orders
    })
})
//get all orders -- for admin
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find();

    //now total amount calculate 

    let totalAmount = 0;

    orders.forEach((order) => {
        totalAmount += order.totalPrice;
    })
    res.status(200).json({
        success: true,
        totalAmount,
        orders
    })
})
//update order status -- for admin
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (order.orderStatus === "Deliverd") {
        return next(new ErrorHandler("you have alredy deliverd this order", 404))
    };
    
    if (!order) {
        return next(new ErrorHandler("order not found with this Id", 404))

    }

    //update stoke /quqntity of product after deliverd
    order.orderItems.forEach(async (order) => {
        await updateStock(order.product, order.quantity)
    });

    order.orderStatus = req.body.status;
    if (req.body.status === "Deliverd") {
        order.deliveresAt = Date.now();
    }

    await order.save({ validateBeforeSave: false })


    res.status(200).json({
        success: true,


    })
});

//now make updateStock function
async function updateStock(id,quantity){
  const product = await products.findById(id);

  product.stock -=quantity;

  await product.save({validateBeforeSave:false})
}

//delete orders 
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("order not found with this Id", 404))

    }
    await order.remove()

    
    res.status(200).json({
        success: true,
       message:"order deleted successfully"
    })
})

