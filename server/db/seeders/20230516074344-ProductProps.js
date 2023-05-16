'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ProductProps',
      [
        {
          productId: 1,
          colorId: 2,
          sizeId: 3
        },
        {
          productId: 2,
          colorId: 3,
          sizeId: 1
        },
        {
          productId: 3,
          colorId: 1,
          sizeId: 1
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductProps', null, {});
  }
};
