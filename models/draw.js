'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Draw extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Draw.init({
    group_id: DataTypes.INTEGER,
    draw_date: DataTypes.DATE,
    draw_type: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    created_date: DataTypes.DATE,
    modified_by: DataTypes.INTEGER,
    modified_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Draw',
  });
  return Draw;
};