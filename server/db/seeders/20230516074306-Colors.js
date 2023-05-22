'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Colors',
      [
        {
          color: 'Белый',
        },
        {
          color: 'Черный',
        },
        {
          color: 'Серый',
        },
        {
          color: 'Бежевый',
        },
        {
          color: 'Синий',
        },
        {
          color: 'Голубой',
        },
        {
          color: 'Зеленый',
        },
        {
          color: 'Хаки',
        },
        {
          color: 'Красный',
        },
        {
          color: 'Розовый',
        },
        {
          color: 'Желтый',
        },
        {
          color: 'Оранжевый',
        },
        {
          color: 'Сиреневый',
        },
        {
          color: 'Цветной',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  }
};
