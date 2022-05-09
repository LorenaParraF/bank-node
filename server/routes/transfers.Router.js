const express = require('express');
// controller
const { totalTransfersUser } = require('../controllers/transfers.controller');

const router = express.Router();

router.post('/signup', totalTransfersUser);

module.exports = { transfersRouter: router };
