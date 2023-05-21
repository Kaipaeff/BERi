'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imgId: {
        references: {
          model: {
            tableName: 'Images',
          },
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      productId: {
        references: {
          model: {
            tableName: 'Products',
          },
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      productPropsId: {
        references: {
          model: {
            tableName: 'ProductProps',
          },
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductImages');
  }
};