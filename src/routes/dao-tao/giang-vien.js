const express = require("express");
const router = express.Router();

const giangvienController = require("../../app/controllers/dao-tao/giangvienController");
//
router.use("/", giangvienController.index);

module.exports = router;
