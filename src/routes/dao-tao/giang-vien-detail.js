const express = require("express");
const router = express.Router();

const giangvienDetailController = require("../../app/controllers/dao-tao/giangvienDetailController");
//
router.use("/", giangvienDetailController.index);

module.exports = router;
