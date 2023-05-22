'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Product, {
        through: models.ProductImage,
        foreignKey: 'imgId',
      });
      this.belongsToMany(models.ProductProps, {
        through: models.ProductImage,
        foreignKey: 'imgId',
      });
    }
  }
  Image.init({
    src: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};