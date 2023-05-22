'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Carts',
      [
        {
          userId: 2,
          productPropsId: 1,
          productName: 'Куртка Zara',
          quantity: 2,
          price: 3500,
          totalPrice: 10000,
          orderId: 1,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carts', null, {});
  }
};
