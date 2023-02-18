const express = require("express");
const { newOrder,singleOrder,myOrders, updateOrder, getAllOrders, deleteOrder } = require("../controllers/orderController");
const { isAuthenticate, adminRole } = require("../middleware/authentication");


const router = express.Router();

//create order route
router.route("/order/new").post(isAuthenticate,newOrder)
// get single order
router.route("/single-order/:id").get(isAuthenticate, singleOrder)
// my all orders 
router.route("/myorders").get(isAuthenticate,myOrders)
// my all orders --admin
router.route("/allorders").get(isAuthenticate,adminRole("admin") ,getAllOrders)

//update and delete order --admin
router.route("/admin/order/:id").put(isAuthenticate,adminRole("admin") ,updateOrder).delete(isAuthenticate,adminRole("admin"),deleteOrder)






module.exports = router