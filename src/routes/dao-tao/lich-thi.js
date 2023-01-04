const express = require("express");
const router = express.Router();

const lichthiController = require("../../app/controllers/dao-tao/lichthiController");
//
router.use("/", lichthiController.index);

module.exports = router;
