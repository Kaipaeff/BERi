'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
        type: Sequelize.INTEGER
      },
      totalOrderPrice: {
        type: Sequelize.DECIMAL
      },
      addressId: {
        references: {
          model: {
            tableName: 'DeliveryAddresses',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
        type: Sequelize.INTEGER
      },
      accepted: {
        type: Sequelize.BOOLEAN
      },
      processed: {
        type: Sequelize.BOOLEAN
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      canceled: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderLists');
  }
};