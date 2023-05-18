'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Sizes',
      [
        {
          size: 10,
        },
        {
          size: 20,
        },
        {
          size: 30,
        },
        {
          size: 40,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sizes', null, {});
  }
};
