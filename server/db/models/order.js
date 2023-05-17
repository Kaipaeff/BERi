'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.DeliveryAddress, { foreignKey: 'addressId' });
      this.belongsTo(models.ProductProps, {foreignKey: "orderedProduct"});
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    orderedProduct: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN,
    purchased: DataTypes.BOOLEAN,
    canceled: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};