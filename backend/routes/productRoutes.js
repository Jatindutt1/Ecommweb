const express = require("express");
const { createProduct, getAllProducts, updateProductApi, deleteproduct, viewsingleproduct, createProductReview } = require("../controllers/ProdutController");
const { isAuthenticate, adminRole } = require("../middleware/authentication");

const router = express.Router();

// router.route("/product").get(getAllProduct)

//create product route
router.route("/admin/createproduct").post(isAuthenticate, createProduct)
//get all product route
router.route("/Products").get(getAllProducts)
//update product route
router.route("/admin/updateProducts/:id").put(isAuthenticate, adminRole("admin"), updateProductApi)
//delete product Api route
router.route("/admin/deleteProducts/:id").delete(isAuthenticate, adminRole("admin"), deleteproduct)
//view single product route
router.route("/viewsingleProducts/:id").get(viewsingleproduct)
//give rating
router.route("/give-rating").put( isAuthenticate, createProductReview)





module.exports = router