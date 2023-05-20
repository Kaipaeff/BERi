'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Colors',
      [
        {
          color: 'Белый',
        },
        {
          color: 'Черный',
        },
        {
          color: 'Синий',
        },
        {
          color: 'Красный',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  }
};
