'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Vendors',
      [
        {
          name: 'Adidas',
          country: 'Германия',
          premium: false,
        },
        {
          name: 'Nike',
          country: 'США',
          premium: false,
        },
        {
          name: 'Gucci',
          country: 'Италия',
          premium: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vendors', null, {});
  },
};
