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
      this.hasMany(models.Cart, { foreignKey: 'productPropsId' });
      this.belongsTo(models.Product, { foreignKey: 'productId' });
      this.belongsTo(models.Size, { foreignKey: 'sizetId' });
      this.belongsTo(models.Color, { foreignKey: 'colorId' });
    }
  }
  ProductProps.init({
    productId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    salePrice: DataTypes.DECIMAL,
    sale: DataTypes.BOOLEAN,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductProps',
  });
  return ProductProps;
};