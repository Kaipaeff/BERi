'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Ages',
      [
        {
          age: 'от 0 до 12 мес',
        },
        {
          age: 'от 6 мес до 5 лет',
        },
        {
          age: 'от 6 до 14 лет',
        },
        {
          age: 'от 0 до 3 мес',
        },
        {
          age: 'от 3 до 6 мес',
        },
        {
          age: 'от 6 до 9 меc',
        },
        {
          age: '1 год',
        },
        {
          age: 'от 1 до 1.3 года',
        },
        {
          age: '1.5 года',
        },
        {
          age: '2 года',
        },
        {
          age: '3 года',
        },
        {
          age: 'от 4 до 5 лет',
        },
        {
          age: 'от 5 до 6 лет',
        },
        {
          age: 'от 7 до 8 лет',
        },
        {
          age: 'от 8 лет',
        },
        {
          age: 'от 0  до 14 лет',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ages', null, {});
  },
};
