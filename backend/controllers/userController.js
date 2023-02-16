const User = require("../modals/usermodal");
const catchAsyncErrors = require("../middleware/catchAsyncError"); //for error
const ErrorHandler = require("../utils/errorhandler");
const sendToken = require("../utils/cookiejwttoken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto")


//register api
exports.createUser = catchAsyncErrors(async (req, res, next) => {
  //user exist or not
  const { firstName, lastName, email, password, phoneNumber, role } = req.body;
  const existuser = await User.findOne({email});
  if(!existuser){
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      role,
      avatar: {
        public_id: "sample",
        url: "profilepic",
      },
    });
    sendToken(user, 201, res);
  }else{
    res.status(404).json({
      success:false,
      message:"User already Exist"
    })
  }

});

//all user api
exports.allUser = catchAsyncErrors(async (req, res, next) => {
  const alluser = await User.find();

  res.status(201).json({
    success: true,
    alluser,
  });
});

//login user with existing credintial Api
exports.userLogin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // check if user exist or not
  const user = await User.findOne({ email });
  if (user && (await user.comparePassword(password)) ){
    sendToken(user, 200, res);
  }else {
    return next(new ErrorHandler("Invalid credintials", 401));
  }
  
 
});

//fetch single user by id
exports.singleUser = catchAsyncErrors(async (req, res, next) => {
  const singleuser = await users.findById(req.params.id);

  if (!singleuser) {
    return next(new ErrorHandler("user not found", 404));
  }
  res.status(200).json({
    success: true,
    singleuser,
  });
});

//logout api

exports.logoutuser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "logged out successfully",
  });
});

//Forgot password api
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  //find user with email
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  //get reset token from usermodal
  const resetToken = user.getResetPasswordToken();
  //now save user with reset token
  await user.save({ validateBeforeSave: false });

  //create reset password url

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  //create message to send
  const message = `your reset password link is:- \n\n ${resetPasswordUrl}`;

  try {
    await sendEmail({
      email: user.email,
      subject: "password recvery",
      message: message,
    });
    res.status(200).json({
      success: true,
      message: `Email send to${user.email} succesfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

//reset password api
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
 //creating  token hased 
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

    //find
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire:{ $gt:Date.now()},     //token expire time
    })
    if (!user) {
      return next(new ErrorHandler("Reset password token is invalid or expired", 400));
    }
   
    //now change password and (undefined  resetPasswordToken or resetPasswordExpire)
    user.password=req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save()

    sendToken(user, 200, res);

});


//get user detail
exports.getUserDetail= catchAsyncErrors(async(req,res,next)=>{
  const user = await User.findById(req.user.id) //all user data save in req.user in middleware in authentiaction

  res.status(200).json({
    success:true,
    user
  })
}) 

// update user password
exports.updatePassword= catchAsyncErrors(async(req,res,next)=>{
  const user = await User.findById(req.user.id || req.user.password) 

  const isPasswordMatch = await user.comparePassword(req.body.oldPassword)
  if (!isPasswordMatch){
    return next(new ErrorHandler("oldPassword is incorrect", 404));
  }

  user.password=req.body.newPassword

   await user.save()

   sendToken(user, 200, res);


});

//update user data api
exports.updateUserApi = catchAsyncErrors(async (req, res, next) => {

  const updateData ={
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    // phoneNumber:req.body.lastName,
  };

  const user = await User.findByIdAndUpdate(req.user.id ,updateData,{
    new: true,
    runValidators: true,
    useFindAndModify: false,
  } );

res.status(200).json({
  success: true,
  message: "user update successfully",
 
});
});










































//delete user Api
exports.deleteUser = catchAsyncErrors(async (req, res) => {
  const deleteuser = await User.findById(req.params.id);
  if (!deleteuser) {
    return next(new ErrorHandler("user not found", 404));
  }
  await deleteuser.delete();
  res.status(200).json({
    success: true,
    message: "user delete sucessfully",
  });
});


