const express = require("express");
const {
  createUser,
  allUser,
  userLogin,
  singleUser,
  deleteUser,
  updateUserApi,
  logoutuser,
  forgotPassword,
  resetPassword,
  getUserDetail,
  updatePassword
} = require("../controllers/userController");
const { isAuthenticate ,adminRole } = require("../middleware/authentication");


const router = express.Router();

//user resgister route
router.route("/register").post(createUser);
//all user route
router.route("/allusers").get(allUser);
//user login routes
router.route("/login").post(userLogin);
//fetch single user routes
router.route("/singleuser/:id").get(singleUser);
//delete user route
router.route("/delete/:id").delete(deleteUser);
//update user route
router.route("/update-user").put(isAuthenticate , updateUserApi);
//logout
router.route("/logout").get(logoutuser);
//forgot
router.route("/forgot").post(forgotPassword);
//reset
router.route("/reset/:token").put(resetPassword);
//my data api rout
router.route("/mydata").get(isAuthenticate , getUserDetail);
//my data api rout
router.route("/updatePassword").put(isAuthenticate , updatePassword);

module.exports = router;
