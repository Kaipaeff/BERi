'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Vendors',
      [
        {
          name: 'Adidas',
          country: 'Германия',
        },
        {
          name: 'Nike',
          country: 'США',
        },
        {
          name: 'Gucci',
          country: 'Италия',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vendors', null, {});
  }
};
