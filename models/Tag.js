// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

// set up fields and rules for Tag model
Tag.init(
  {
    // TODO: define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
