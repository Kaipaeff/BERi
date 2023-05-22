'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Sizes',
      [
        {
          size: 50,
        },
        {
          size: 56,
        },
        {
          size: 62,
        },
        {
          size: 68,
        },
        {
          size: 74,
        },
        {
          size: 80,
        },
        {
          size: 86,
        },
        {
          size: 92,
        },
        {
          size: 98,
        },
        {
          size: 104,
        },
        {
          size: 110,
        },
        {
          size: 116,
        },
        {
          size: 122,
        },
        {
          size: 128,
        },
        {
          size: 134,
        },
        {
          size: 140,
        },
        {
          size: 146,
        },
        {
          size: 152,
        },
        {
          size: 158,
        },
        {
          size: 16,
        },
        {
          size: 16.5,
        },
        {
          size: 17,
        },
        {
          size: 18,
        },
        {
          size: 19,
        },
        {
          size: 19.5,
        },
        {
          size: 20,
        },
        {
          size: 21,
        },
        {
          size: 22,
        },
        {
          size: 22.5,
        },
        {
          size: 23,
        },
        {
          size: 24,
        },
        {
          size: 25,
        },
        {
          size: 26,
        },
        {
          size: 27,
        },
        {
          size: 28,
        },
        {
          size: 28.5,
        },
        {
          size: 29,
        },
        {
          size: 30,
        },
        {
          size: 31,
        },
        {
          size: 31.5,
        },
        {
          size: 32,
        },
        {
          size: 33,
        },
        {
          size: 34,
        },
        {
          size: 34.5,
        },
        {
          size: 35,
        },
        {
          size: 36,
        },
        {
          size: 0,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sizes', null, {});
  }
};
