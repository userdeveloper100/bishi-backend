'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Group.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    monthly_amount: DataTypes.FLOAT,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.INTEGER,
    created_date: DataTypes.DATE,
    modified_by: DataTypes.INTEGER,
    modified_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};