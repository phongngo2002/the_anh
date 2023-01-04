const express = require("express");
const router = express.Router();

const lichthiDetailController = require("../../app/controllers/dao-tao/lichthiDetailController");
//
router.use("/", lichthiDetailController.index);

module.exports = router;