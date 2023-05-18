'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Vendors',
      [
        {
          name: 'MAJESTY',
          country: 'Турция',
        },
        {
          name: 'COCOLAND',
          country: 'Турция',
        },
        {
          name: 'TETERO',
          country: 'Турция',
        },
        {
          name: 'MOONSTAR',
          country: 'Турция',
        },
        {
          name: 'PIER LONE',
          country: 'Турция',
        },
        {
          name: 'VIA GIRLS',
          country: 'Турция',
        },
        {
          name: 'MONNA ROSA',
          country: 'Турция',
        },
        {
          name: 'ZARA',
          country: 'Испания',
        },
        {
          name: 'H&M',
          country: 'Швеция',
        },
        {
          name: 'WANEX',
          country: 'Турция',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vendors', null, {});
  }
};
