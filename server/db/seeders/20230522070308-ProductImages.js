'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ProductImages',
      [
        {
          imgId: 1,
          productId: 1,
          productPropsId: 1,
        },
        {
          imgId: 2,
          productId: 2,
          productPropsId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  },
};
