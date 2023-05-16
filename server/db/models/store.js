'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.ProductProps, {foreignKey: "productPropsId"});
    }
  }
  Store.init({
    productPropsId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    vendorPrice: DataTypes.INTEGER,
    salePrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};