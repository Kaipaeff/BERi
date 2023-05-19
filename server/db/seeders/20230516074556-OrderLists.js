'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'OrderLists',
      [
        {
          userId: 2,
          totalOrderPrice: 10000,
          addressId: 2,
          accepted: true,
          processed: true,
          completed: true,
          canceled: false,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderLists', null, {});
  }
};
