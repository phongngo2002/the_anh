const express = require("express");
const router = express.Router();

const khoahocDetailController = require("../../app/controllers/dao-tao/khoahocDetailController");
//
router.use("/", khoahocDetailController.index);

module.exports = router;
