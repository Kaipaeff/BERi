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
      this.belongsToMany(models.Image, {
        through: models.ProductImage,
        foreignKey: 'productId',
      });
      this.belongsToMany(models.User, {
        through: models.Favorite,
        foreignKey: 'productId'
      })
      this.belongsTo(models.Vendor, { foreignKey: 'vendorId' });
      this.belongsTo(models.Sex, { foreignKey: 'sexId' });
      this.belongsTo(models.Age, { foreignKey: 'ageId' });
      this.belongsTo(models.ProductType, { foreignKey: 'productTypeId' });
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
      this.hasMany(models.ProductRating, { foreignKey: 'productId' });
      this.hasMany(models.ProductProps, {
        foreignKey: 'productId',
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    vendorId: DataTypes.INTEGER,
    vendorPrice: DataTypes.DECIMAL,
    categoryId: DataTypes.INTEGER,
    productTypeId: DataTypes.INTEGER,
    sexId: DataTypes.INTEGER,
    ageId: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    reviews: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
