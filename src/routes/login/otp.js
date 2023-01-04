const express = require("express");
const router = express.Router();

const otpController = require("../../app/controllers/login/otpController");
//
router.use("/", otpController.index);

module.exports = router;
