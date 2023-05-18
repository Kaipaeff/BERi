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
          phone: '+7 (777) 777-77-77',
          isAdmin: true,
          isActivated: true,
        },
        {
          email: 'user1@mail.ru',
          password: '123',
          phone: '+7 (777) 012-34-56',
          isAdmin: false,
          isActivated: true,
        },
        {
          email: 'user2@mail.ru',
          password: '123',
          phone: '+7 (777) 333-33-33',
          isAdmin: false,
          isActivated: true,
        },
        {
          email: 'user2@mail.ru',
          password: '123',
          phone: '+7 (777) 444-44-44',
          isAdmin: false,
          isActivated: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
