'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Куртка 1',
          description: 'Куртка детская',
          sex: 1,
          img: '1.jpg',
          rating: 3.5,
          reviews: 17,
          vendorId: 2,
          categoryId: 1
        },
        {
          name: 'Куртка 2',
          description: 'Куртка детская',
          sex: 2,
          img: '2.jpg',
          rating: 4,
          reviews: 5,
          vendorId: 1,
          categoryId: 1
        },
        {
          name: 'Брюки 1',
          description: 'Брюки детские',
          sex: 1,
          img: '3.jpg',
          rating: 4.2,
          reviews: 11,
          vendorId: 1,
          categoryId: 2
        },
        {
          name: 'Брюки 2',
          description: 'Брюки детские',
          sex: 1,
          img: '4.jpg',
          rating: 4.8,
          reviews: 21,
          vendorId: 2,
          categoryId: 2
        },
        {
          name: 'Джинсы 1',
          description: 'Джинсы детские',
          sex: 1,
          img: '5.jpg',
          rating: 4.2,
          reviews: 11,
          vendorId: 1,
          categoryId: 3
        },
        {
          name: 'Джинсы 2',
          description: 'Джинсы детские',
          sex: 2,
          img: '6.jpg',
          rating: 4.2,
          reviews: 11,
          vendorId: 1,
          categoryId: 3
        },
        {
          name: 'Футболка 1',
          description: 'Футболка детские',
          sex: 1,
          img: '7.jpg',
          rating: 4.7,
          reviews: 1,
          vendorId: 1,
          categoryId: 4
        },
        {
          name: 'Футболка 2',
          description: 'Футболка детские',
          sex: 2,
          img: '8.jpg',
          rating: 4.2,
          reviews: 13,
          vendorId: 1,
          categoryId: 4
        },
        {
          name: 'Рубашка 1',
          description: 'Рубашка детские',
          sex: 1,
          img: '9.jpg',
          rating: 4.3,
          reviews: 10,
          vendorId: 1,
          categoryId: 5
        },
        {
          name: 'Рубашка 2',
          description: 'Рубашка детские',
          sex: 1,
          img: '10.jpg',
          rating: 4.9,
          reviews: 17,
          vendorId: 1,
          categoryId: 5
        },
        {
          name: 'Кроссовки',
          description: 'Кроссовки детские',
          sex: 2,
          img: '11.jpg',
          rating: 4.3,
          reviews: 11,
          vendorId: 2,
          categoryId: 6
        },
        {
          name: 'Сумка',
          description: 'Сумка детская',
          sex: 3,
          img: '12.jpg',
          rating: 4,
          reviews: 15,
          vendorId: 3,
          categoryId: 6
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
