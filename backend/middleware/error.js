const { TokenExpiredError, JsonWebTokenError } = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorhandler")

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internal server error";


// worng mongod id error  (Error handle)
if(err.name === "CastError"){
    const message= `Resource not found.  Invalid ${err.path}`;
    err = new ErrorHandler(message,400)
}

// mongoose duplicate key error
if (err.code === 11000){
    const message= `Duplicate ${object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message,400)
}
// wrong jwt token
if (err.name === JsonWebTokenError){
    const message= `jwt token is invalid , try again.`;
    err = new ErrorHandler(message,400)
}
// expired jwt token
if (err.name === TokenExpiredError){
    const message= `jwt token is Expire , try again.`;
    err = new ErrorHandler(message,400)
}

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    })
}