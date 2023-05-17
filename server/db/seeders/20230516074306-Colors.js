'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Colors',
      [
        {
          color: 'Красный',
        },
        {
          color: 'Зеленый',
        },
        {
          color: 'Синий',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  }
};
