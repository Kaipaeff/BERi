'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Sexes',
      [
        {
          sex: 'мальчики',
        },
        {
          sex: 'девочки',
        },
        {
          sex: 'унипол',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sexes', null, {});
  },
};
