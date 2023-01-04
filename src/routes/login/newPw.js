const express = require("express");
const router = express.Router();

const newPwController = require("../../app/controllers/login/newPwController");
//
router.use("/", newPwController.index);

module.exports = router;
