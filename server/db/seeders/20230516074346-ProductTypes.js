'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ProductTypes',
      [
        {
          productType: 'Белье',
        },
        {
          productType: 'Брюки',
        },
        {
          productType: 'Джинсы',
        },
        {
          productType: 'Куртки',
        },
        {
          productType: 'Комплекты',
        },
        {
          productType: 'Майки',
        },
        {
          productType: 'Комбинезоны',
        },
        {
          productType: 'Носки',
        },
        {
          productType: 'Рубашки',
        },
        {
          productType: 'Спортивная коллекция',
        },
        {
          productType: 'Толстовки',
        },
        {
          productType: 'Трикотаж',
        },
        {
          productType: 'Футболки',
        },
        {
          productType: 'Шорты',
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
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductTypes', null, {});
  },
};
