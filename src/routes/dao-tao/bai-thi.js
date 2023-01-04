const express = require("express");
const router = express.Router();

const baithiController = require("../../app/controllers/dao-tao/baithiController");
//
router.use("/", baithiController.index);

module.exports = router;
