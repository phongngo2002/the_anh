const express = require("express");
const router = express.Router();

const luyenthiController = require("../../app/controllers/dao-tao/luyenthiController");
//
router.use("/", luyenthiController.index);

module.exports = router;
