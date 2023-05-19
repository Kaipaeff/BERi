'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product, {foreignKey: "vendorId"});
    }
  }
  Vendor.init(
    {
      name: DataTypes.STRING,
      country: DataTypes.STRING,
      premium: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Vendor',
    }
  );
  return Vendor;
};
