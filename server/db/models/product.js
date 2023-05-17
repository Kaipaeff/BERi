'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Vendor, { foreignKey: 'vendorId' });
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
      this.hasMany(models.ProductProps, {
        foreignKey: 'productId',
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    sex: DataTypes.INTEGER,
    img: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    reviews: DataTypes.INTEGER,
    vendorId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};