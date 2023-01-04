const express = require("express");
const router = express.Router();

const khoahocController = require("../../app/controllers/dao-tao/khoahocController");
//
router.use("/", khoahocController.index);

module.exports = router;
