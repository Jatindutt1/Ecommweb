const express = require("express");
const { newOrder } = require("../controllers/orderController");
const { isAuthenticate, adminRole } = require("../middleware/authentication");


const router = express.Router();

//create order route
router.route("/order/new").post(isAuthenticate,newOrder)






module.exports = router