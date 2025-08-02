'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Winner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Winner.init({
    draw_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    received_amount: DataTypes.FLOAT,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,
    created_date: DataTypes.DATE,
    modified_by: DataTypes.INTEGER,
    modified_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Winner',
  });
  return Winner;
};