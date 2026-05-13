const express=require("express");
const { completeAuthentication, requestOTP, verifyOtp } = require("../controllers/UserController");
const UserRoute = express.Router();

UserRoute.post("/request-otp", requestOTP);

UserRoute.post("/verify-otp", verifyOtp);

UserRoute.post("/authentication", completeAuthentication);

module.exports=UserRoute;