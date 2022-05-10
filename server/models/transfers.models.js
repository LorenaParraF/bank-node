const { DataTypes } = require('sequelize');

const { db } = require('../utils/database');

const Transfers = db.define('transfers', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userId: {
    foreignKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  //   id usuario que hiso la transferencia
  senderUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  //   quien hiso la transferencia
  ReceiverUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
module.exports = { Transfers };
