'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Colors',
      [
        {
          color: 'Белый',
        },
        {
          color: 'Желтый',
        },
        {
          color: 'Оранжевый',
        },
        {
          color: 'Розовый',
        },
        {
          color: 'Красный',
        },
        {
          color: 'Синий',
        },
        {
          color: 'Зеленый',
        },
        {
          color: 'Бежевый',
        },
        {
          color: 'Коричневый',
        },
        {
          color: 'Черный',
        },
        {
          color: 'Мультиколор',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  }
};
