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
          productId: 1,
          colorId: 2,
          sizeId: 2,
          salePrice: 1700,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 1,
          colorId: 1,
          sizeId: 2,
          salePrice: 2000,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 1,
          colorId: 3,
          sizeId: 3,
          salePrice: 2000,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 2,
          colorId: 3,
          sizeId: 1,
          salePrice: 2500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 2,
          colorId: 2,
          sizeId: 2,
          salePrice: 2400,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 2,
          colorId: 3,
          sizeId: 3,
          salePrice: 2500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 2,
          colorId: 1,
          sizeId: 3,
          salePrice: 2500,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 2,
          colorId: 3,
          sizeId: 2,
          salePrice: 2500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 3,
          colorId: 1,
          sizeId: 1,
          salePrice: 5500,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 3,
          colorId: 2,
          sizeId: 2,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 3,
          colorId: 1,
          sizeId: 3,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 3,
          colorId: 3,
          sizeId: 1,
          salePrice: 4500,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 4,
          colorId: 1,
          sizeId: 1,
          salePrice: 4200,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 4,
          colorId: 2,
          sizeId: 1,
          salePrice: 4100,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 4,
          colorId: 1,
          sizeId: 3,
          salePrice: 4000,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 5,
          colorId: 1,
          sizeId: 2,
          salePrice: 3800,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 5,
          colorId: 3,
          sizeId: 1,
          salePrice: 3800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 5,
          colorId: 2,
          sizeId: 3,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 6,
          colorId: 1,
          sizeId: 2,
          salePrice: 5500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 6,
          colorId: 1,
          sizeId: 1,
          salePrice: 5100,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 6,
          colorId: 2,
          sizeId: 3,
          salePrice: 5500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 7,
          colorId: 1,
          sizeId: 1,
          salePrice: 2000,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 7,
          colorId: 2,
          sizeId: 2,
          salePrice: 2000,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 7,
          colorId: 4,
          sizeId: 3,
          salePrice: 1500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 8,
          colorId: 2,
          sizeId: 1,
          salePrice: 1800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 8,
          colorId: 1,
          sizeId: 3,
          salePrice: 2100,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 8,
          colorId: 1,
          sizeId: 3,
          salePrice: 2100,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 9,
          colorId: 2,
          sizeId: 3,
          salePrice: 3000,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 9,
          colorId: 2,
          sizeId: 1,
          salePrice: 3000,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 9,
          colorId: 1,
          sizeId: 2,
          salePrice: 3200,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 10,
          colorId: 1,
          sizeId: 1,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 10,
          colorId: 1,
          sizeId: 2,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 10,
          colorId: 2,
          sizeId: 3,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 11,
          colorId: 1,
          sizeId: 1,
          salePrice: 7500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 11,
          colorId: 1,
          sizeId: 2,
          salePrice: 8500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 12,
          colorId: 1,
          sizeId: 3,
          salePrice: 1500,
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
