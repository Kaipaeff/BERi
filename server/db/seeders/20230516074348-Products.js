'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Куртка 1',
          description: 'Куртка детская',
          vendorId: 2,
          vendorPrice: 1000,
          categoryId: 1,
          productTypeId: 1,
          sexId: 1,
          ageId: 1,
          rating: 3.5,
          reviews: 17,
        },
        {
          name: 'Куртка 2',
          description: 'Куртка детская',
          vendorId: 2,
          vendorPrice: 1200,
          categoryId: 1,
          productTypeId: 1,
          sexId: 1,
          ageId: 2,
          rating: 4,
          reviews: 15,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
