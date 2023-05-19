'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
      },
      vendorId: {
        references: {
          model: {
            tableName: 'Vendors',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
        type: Sequelize.INTEGER,
      },
      vendorPrice: {
        type: Sequelize.DECIMAL,
      },
      categoryId: {
        references: {
          model: {
            tableName: 'Categories',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
        type: Sequelize.INTEGER,
      },
      productTypeId: {
        references: {
          model: {
            tableName: 'ProductTypes',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
        type: Sequelize.INTEGER,
      },
      sexId: {
        references: {
          model: {
            tableName: 'Sexes',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
        type: Sequelize.INTEGER,
      },
      ageId: {
        references: {
          model: {
            tableName: 'Ages',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
        type: Sequelize.INTEGER,
      },
      rating: {
        type: Sequelize.FLOAT,
      },
      reviews: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Products');
  },
};
