const express = require("express");
const errorMiddleware = require("./middleware/error")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv");

//config
dotenv.config({ path: "backend/config/config.env" });

const app = express();
app.use(express.json());
app.use(cookieParser());


//routes import
const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes");
const payment = require("./routes/paymentRoutes");

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);

app.use(errorMiddleware)

//middleware for error


module.exports = app;
