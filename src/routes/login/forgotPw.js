const express = require("express");
const router = express.Router();

const fotgotPwController = require("../../app/controllers/login/fotgotPwController");
//
router.use("/", fotgotPwController.index);

module.exports = router;
