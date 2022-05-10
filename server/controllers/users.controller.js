// import models
// const { validationResult } = require('express-validator');

const { User } = require('../models/users.models');

const signupCreateUsers = async (req, res) => {
  try {
    console.log(req.body);
    const { name, password } = req.body;

    // const errors = validationResult(req);

    let accountNumber = Math.floor(
      Math.random() * (99999999 - 100000) + 100000
    );

    const newUserSignup = await User.create({
      name,
      password,
      accountNumber,
    });

    res.status(200).json({
      newUserSignup,
    });
  } catch (errors) {
    console.log({
      errors,
    });
  }
};

const LoginUserPass = () => {};
const historyTransfers = () => {};

module.exports = { signupCreateUsers, LoginUserPass, historyTransfers };
