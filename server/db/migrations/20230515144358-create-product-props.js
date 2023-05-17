'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductProps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        references: {
          model: {
            tableName: 'Products',
          },
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      colorId: {
        references: {
          model: {
            tableName: 'Colors',
          },
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      sizeId: {
        references: {
          model: {
            tableName: 'Sizes',
          },
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      vendorPrice: {
        type: Sequelize.DECIMAL,
      },
      salePrice: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductProps');
  },
};
