const express = require("express");
const router = express.Router();

const luyenthiAllController = require("../../app/controllers/dao-tao/luyenthiAllController");
//
router.use("/", luyenthiAllController.index);

module.exports = router;
