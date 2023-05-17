'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Carts',
      [
        {
          userId: 2,
          productPropsId: 2,
          quantity: 2
        },
        {
          userId: 2,
          productPropsId: 3,
          quantity: 1
        },
        {
          userId: 3,
          productPropsId: 1,
          quantity: 1
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carts', null, {});
  }
};
