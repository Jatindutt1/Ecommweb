const express = require("express");
const { processPaymnet, sendStripeApiKey } = require("../controllers/paymentController");
const { isAuthenticate, adminRole } = require("../middleware/authentication");

const router = express.Router();


//create payment
router.route("/payment").post(isAuthenticate, processPaymnet)
//stripe api key send
router.route("/stripeapikey").get(isAuthenticate, sendStripeApiKey)




module.exports = router