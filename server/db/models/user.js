'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.DeliveryAddress, { foreignKey: 'userId' });
<<<<<<< HEAD
      this.hasMany(models.Order, { foreignKey: 'userId' });
      this.hasMany(models.Cart, { foreignKey: 'userId' });
=======
      this.hasMany(models.OrderList, { foreignKey: 'userId' });
      this.hasMany(models.ProductRating, { foreignKey: 'userId' });
      this.hasMany(models.ProductRating, { foreignKey: 'userId' });
      this.hasMany(models.Token, { foreignKey: 'userId' });
      this.belongsToMany(models.Product, {
        through: models.Favorite,
        foreignKey: 'userId',
      });
>>>>>>> dev
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
<<<<<<< HEAD
      isAdmin: DataTypes.BOOLEAN,
      isActivated: DataTypes.BOOLEAN,
=======
      phone: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      isActivated: DataTypes.BOOLEAN,
      activationLink: DataTypes.STRING,
>>>>>>> dev
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
