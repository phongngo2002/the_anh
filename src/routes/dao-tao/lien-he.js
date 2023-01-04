const express = require("express");
const router = express.Router();

const lienheController = require("../../app/controllers/dao-tao/lienheController");
//
router.use("/", lienheController.index);

module.exports = router;
