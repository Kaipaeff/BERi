'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Vendors',
      [
        {
          name: 'MAJESTY',
          country: 'Турция',
          premium: false,
        },
        {
          name: 'COCOLAND',
          country: 'Турция',
          premium: false,
        },
        {
          name: 'TETERO',
          country: 'Турция',
          premium: false,
        },
        {
          name: 'MOONSTAR',
          country: 'Турция',
          premium: false,
        },
        {
          name: 'PIER LONE',
          country: 'Турция',
          premium: false,
        },
        {
          name: 'VIA GIRLS',
          country: 'Турция',
          premium: false,
        },
        {
          name: 'MONNA ROSA',
          country: 'Турция',
          premium: false,
        },
        {
          name: 'ZARA',
          country: 'Испания',
          premium: false,
        },
        {
          name: 'H&M',
          country: 'Швеция',
          premium: false,
        },
        {
          name: 'WANEX',
          country: 'Турция',
          premium: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vendors', null, {});
  },
};
