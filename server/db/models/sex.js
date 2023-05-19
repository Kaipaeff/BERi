'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product, { foreignKey: 'sexId' });
    }
  }
  Sex.init({
    sex: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sex',
  });
  return Sex;
};