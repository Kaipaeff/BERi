'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Штаны',
          description: 'Штаны детские',
          sex: 1,
          img: '1.jpg',
          vendorId: 1,
          categoryId: 1
        },
        {
          name: 'Кроссовки',
          description: 'Кроссовки детские',
          sex: 2,
          img: '2.jpg',
          vendorId: 2,
          categoryId: 2
        },
        {
          name: 'Сумка',
          description: 'Сумка детская',
          sex: 3,
          img: '3.jpg',
          vendorId: 3,
          categoryId: 3
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
