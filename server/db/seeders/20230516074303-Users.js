'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'admin@mail.ru',
          password: '123',
          isAdmin: true,
        },
        {
          email: 'user1@mail.ru',
          password: '123',
          isAdmin: false,
        },
        {
          email: 'user2@mail.ru',
          password: '123',
          isAdmin: false,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
