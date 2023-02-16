const products = require("../modals/Productmodal");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError") //for error
const ApiFeatuers = require("../utils/apifeatures");



//Get all product Api

exports.getAllProducts = catchAsyncErrors(
  async (req, res, next) => {

    const apifeatures = new ApiFeatuers(products.find(), req.query).search();
    const allProducts = await apifeatures.query;

    res.status(200).json({
      success: true,
      allProducts,
    });
  }
);

//Create product Api ---only admin
exports.createProduct = catchAsyncErrors(
  async (req, res, next) => {

    req.body.user = req.user.id

    const product = await products.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  })
  ;

//Update Product Api

exports.updateProductApi = catchAsyncErrors(
  async (req, res, next) => {
    let updateProduct = await products.findById(req.params.id);

    if (!updateProduct) {
      return next(new ErrorHandler("product not found", 404))
    }
    updateProduct = await products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      message: "product update successfully",
      updateProduct,
    });
  }
);

//delete product Api

exports.deleteproduct = catchAsyncErrors(
  async (req, res, next) => {
    const deleteproduct = await products.findById(req.params.id);

    if (!deleteproduct) {
      return next(new ErrorHandler("product not found", 404))
    }

    await deleteproduct.remove();
    res.status(200).json({
      success: true,
      message: "product delete successfully",
    });
  }
);

//single view product
exports.viewsingleproduct = catchAsyncErrors(
  async (req, res, next) => {
    const singleproduct = await products.findById(req.params.id);
    //use like this
    // if (!singleproduct) {
    //   res.status(500).json({
    //     success: false,
    //     message: "product not found",
    //   });
    // }

    //uselike this method
    if (!singleproduct) {
      return next(new ErrorHandler("product not found", 404))
    }
    res.status(200).json({
      success: true,
      singleproduct
    })
  }
);

// Create product review or upadate Api

exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body
  const review = {
    user: req.user._id,
    firstName: req.user.firstName,
    rating: Number(rating),
    comment,

  }
  const product = await products.findById(productId);

  //check whether product is reviewed or not

  const isReviewed = product.reviews.find((rev) => rev.user.toString() == req.user._id.toString())
  if (isReviewed) {
    product.reviews.forEach(rev => {
      if (rev.user.toString() === req.user._id.toString()) {
        rev.rating = rating,
          rev.comment = comment
      }

    })

  } else {

    product.reviews.push(review)  //use push methode to push all object in array
     products.numOfReviews=product.reviews.lenght   //define numOfReviews
  }

  // now avarage  of reviews

  let avg = 0;
  product.ratings =product.reviews.forEach(rev=>{
    avg=avg+rev.rating
  })/product.reviews.lenght

  //now save 

  await product.save({validateBeforeSave:false})

  res.status(200).json({
    success:true,
    message:"Review add successfully"
  })
})
