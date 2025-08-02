'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contribution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contribution.init({
    group_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    status: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    created_date: DataTypes.DATE,
    modified_by: DataTypes.INTEGER,
    modified_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Contribution',
  });
  return Contribution;
};