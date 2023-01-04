const express = require("express");
const router = express.Router();

const kqthiController = require("../../app/controllers/dao-tao/kqthiController");
//
router.use("/", kqthiController.index);

module.exports = router;
