'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductProps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Order, { foreignKey: 'orderedProduct' });
      this.hasMany(models.Cart, { foreignKey: 'productPropsId' });
      this.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  ProductProps.init({
    productId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    vendorPrice: DataTypes.DECIMAL,
    salePrice: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'ProductProps',
  });
  return ProductProps;
};