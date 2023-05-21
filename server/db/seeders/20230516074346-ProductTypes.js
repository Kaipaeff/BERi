'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ProductTypes',
      [
        {
          productType: 'Куртки',
        },
        {
          productType: 'Комбинезоны',
        },
        {
          productType: 'Брюки',
        },
        {
          productType: 'Джинсы',
        },
        {
          productType: 'Шорты',
        },
        {
          productType: 'Толстовки',
        },
        {
          productType: 'Трикотаж',
        },
        {
          productType: 'Рубашки',
        },
        {
          productType: 'Белье',
        },
        {
          productType: 'Футболки',
        },
        {
          productType: 'Майки',
        },
        {
          productType: 'Комплекты',
        },
        {
          productType: 'Спортивная коллекция',
        },
        {
          productType: 'Блузы',
        },
        {
          productType: 'Платья',
        },
        {
          productType: 'Юбки',
        },
        {
          productType: 'Головные уборы',
        },
        {
          productType: 'Украшения',
        },
        {
          productType: 'Для волос',
        },
        {
          productType: 'Зонты',
        },
        {
          productType: 'Очки',
        },
        {
          productType: 'Пеналы и кошельки',
        },
        {
          productType: 'Перчатки и варежки',
        },
        {
          productType: 'Платки и шарфы',
        },
        {
          productType: 'Ремни',
        },
        {
          productType: 'Рюкзаки',
        },
        {
          productType: 'Сумки и чехлы',
        },
        {
          productType: 'Часы',
        },
        {
          productType: 'Носки',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductTypes', null, {});
  },
};
