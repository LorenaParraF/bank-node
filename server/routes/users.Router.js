const express = require('express');
const { body } = require('express-validator');

// controller
const {
  signupCreateUsers,
  LoginUserPass,
  historyTransfers,
} = require('../controllers/users.controller');

const router = express.Router();

router.post(
  '/signup',
  body('accountNumber').isLength({ min: 6 }),
  signupCreateUsers
);
router.post('/login', LoginUserPass);
router.get('/:id/history', historyTransfers);

module.exports = { usersRouter: router };
