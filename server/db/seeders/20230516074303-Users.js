'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'admin@mail.ru',
          password: '123',
          phone: '+79192223344',
          isAdmin: true,
          isActivated: true,
        },
        {
          email: 'user1@mail.ru',
          password: '123',
          phone: '+79192223355',
          isAdmin: false,
          isActivated: false,
        },
        {
          email: 'user2@mail.ru',
          password: '123',
          phone: '+79192223366',
          isAdmin: false,
          isActivated: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
