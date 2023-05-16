'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Sizes',
      [
        {
          size: 48,
        },
        {
          size: 50,
        },
        {
          size: 52,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sizes', null, {});
  }
};
