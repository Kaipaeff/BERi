'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Colors',
      [
        {
          color: 'Белый',
          colorCode: '#FFFFFF',
        },
        {
          color: 'Черный',
          colorCode: '#000000',
        },
        {
          color: 'Серый',
          colorCode: '#808080',
        },
        {
          color: 'Бежевый',
          colorCode: '#F5F5DC',
        },
        {
          color: 'Синий',
          colorCode: '#0000FF',
        },
        {
          color: 'Голубой',
          colorCode: '#00BFFF',
        },
        {
          color: 'Зеленый',
          colorCode: '#008000',
        },
        {
          color: 'Хаки',
          colorCode: '#78866b',
        },
        {
          color: 'Красный',
          colorCode: '#FF0000',
        },
        {
          color: 'Розовый',
          colorCode: '#FFC0CB',
        },
        {
          color: 'Желтый',
          colorCode: '#FFFF00',
        },
        {
          color: 'Оранжевый',
          colorCode: '#FFA500',
        },
        {
          color: 'Сиреневый',
          colorCode: '#c8a2c8',
        },
        {
          color: 'Цветной',
          colorCode: '#60FFF5',
        },
        {
          color: 'Коричневый',
          colorCode: '#5F0C0C',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  },
};
