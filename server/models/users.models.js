const { DataTypes } = require('sequelize');

const { db } = require('../utils/database');

const User = db.define('user', {
  // se genera solo
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // se genera en random
  accountNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  // valor default
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: '1000',
  },
  // valor default
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'active',
  },
});
module.exports = { User };
