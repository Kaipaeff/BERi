'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Stores',
      [
        {
          productPropsId: 2,
          quantity: 100,
          vendorPrice: 500,
          salePrice: 1000
        },
        {
          productPropsId: 1,
          quantity: 80,
          vendorPrice: 800,
          salePrice: 1500
        },
        {
          productPropsId: 3,
          quantity: 70,
          vendorPrice: 900,
          salePrice: 1400
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stores', null, {});
  }
};
