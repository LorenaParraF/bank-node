const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// process.env.DB;

const db = new Sequelize({
  dialect: process.env.DIALEC,
  host: process.env.HOS,
  username: process.env.NAMEUSER,
  password: process.env.PASS,
  database: process.env.DB,
  logging: false,
});
module.exports = { db };
