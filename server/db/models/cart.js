'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.OrderList, { foreignKey: 'orderId' });
      this.belongsTo(models.ProductProps, { foreignKey: 'productPropsId' });
    }
  }
  Cart.init(
    {
      userId: DataTypes.INTEGER,
      productPropsId: DataTypes.INTEGER,
      productName: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      totalPrice: DataTypes.DECIMAL,
      orderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  );
  return Cart;
};
