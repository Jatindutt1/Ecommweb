const catchAsyncErrors = require("../middleware/catchAsyncError"); //for error

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPaymnet = catchAsyncErrors(async (req, res, next) => {
    const myPayment = await stripe.create({
        amount: req.body.amount,
        currency: "inr",
        metadata: {
            company: "Ecommerce"
        }
    })
    res.status(200).json({
        success: true,
        client_secret: myPayment.client_secret
    });
})
exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({
        stripeKey: process.env.STRIPE_API_KEY
    });
})