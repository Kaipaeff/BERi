'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.DeliveryAddress, { foreignKey: 'addressId' });
      this.hasMany(models.Cart, { foreignKey: 'orderId' });
    }
  }
  OrderList.init(
    {
      userId: DataTypes.INTEGER,
      totalOrderPrice: DataTypes.DECIMAL,
      addressId: DataTypes.INTEGER,
      accepted: DataTypes.BOOLEAN,
      processed: DataTypes.BOOLEAN,
      completed: DataTypes.BOOLEAN,
      canceled: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'OrderList',
    }
  );
  return OrderList;
};
