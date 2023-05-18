'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          category: 'Верхняя одежда',
        },
        {
          category: 'Брюки',
        },
        {
          category: 'Джинсы',
        },
        {
          category: 'Футболки',
        },
        {
          category: 'Рубашки',
        },
        {
          category: 'ЧЕТА',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
