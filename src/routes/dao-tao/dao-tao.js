const express = require("express");
const router = express.Router();

const daotaoController = require("../../app/controllers/dao-tao/daotaoController");
//
router.use("/", daotaoController.index);

module.exports = router;
