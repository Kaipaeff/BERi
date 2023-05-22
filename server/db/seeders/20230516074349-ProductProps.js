'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ProductProps',
      [
        {
          productId: 1,
          colorId: 2,
          sizeId: 3,
          salePrice: 2000,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 1,
          colorId: 2,
          sizeId: 1,
          salePrice: 1800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 2,
          colorId: 2,
          sizeId: 2,
          salePrice: 1700,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 2,
          colorId: 1,
          sizeId: 2,
          salePrice: 2000,
          sale: false,
          quantity: 20,
          amount: 18,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductProps', null, {});
  },
};
