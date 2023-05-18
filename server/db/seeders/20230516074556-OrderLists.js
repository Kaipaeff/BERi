'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'OrderLists',
      [
        {
          userId: 2,
          orderedProduct: 2,
          quantity: 2,
          addressId: 2,
          completed: false,
          purchased: true,
          canceled: false
        },
        {
          userId: 2,
          orderedProduct: 3,
          quantity: 1,
          addressId: 1,
          completed: true,
          purchased: true,
          canceled: false
        },
        {
          userId: 3,
          orderedProduct: 1,
          quantity: 1,
          addressId: 3,
          completed: false,
          purchased: true,
          canceled: true
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderLists', null, {});
  }
};
