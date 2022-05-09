// import models
const { validationResult } = require('express-validator');
const { where } = require('sequelize/types');

const { User } = require('../models/users.models');

const signupCreateUsers = async (req, res) => {
  try {
    const { name, accountNumber, password, amount, status } = req.body;

    const errors = validationResult(req);

    let randomAcount = Math.floor(Math.random() * 6) + 1;

    //  const randomAcount () =>{

    //  }

    // const randomAcounts = await accountNumber.create({
    //   where: Math.floor(Math.random() * 6) + 1,
    // });

    const newUserSignup = await User.create({
      name,
      password,
      amount,
      status,
      accountNumber: randomAcount,
    });

    if (!errors.isEmpty()) {
      console.log(errors.array());
      res.status(400).json({});
    } else {
      res.status(200).json({
        newUserSignup,
      });
    }

    // if (!errors.isEmpty()) {
    //   console.log(errors.array());
    //   res.status(400).json({});
    // } else
    //   res.status(200).json({
    //     newUserSignup,
    //   });
  } catch (error) {
    console.log({
      error: 'there was a problem creating the user check your request ',
    });
  }
};

const LoginUserPass = () => {};
const historyTransfers = () => {};

module.exports = { signupCreateUsers, LoginUserPass, historyTransfers };
