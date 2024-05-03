const express = require('express');

const router = express.Router()
const tradeController = require("../controllers/trade.controller")
router.post("/start", tradeController.startTrade )

module.exports = router