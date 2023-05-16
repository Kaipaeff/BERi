'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'DeliveryAddresses',
      [
        {
          userId: 2,
          address: 'г. Москва, ул. 800-летия Москвы, д. 2'
        },
        {
          userId: 2,
          address: 'г. Москва, ул. Новый Арбат, д. 2'
        },
        {
          userId: 3,
          address: 'г. Санкт-Петербург, ул. Ленина, д. 2'
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DeliveryAddresses', null, {});
  }
};
