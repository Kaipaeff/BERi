'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Images',
      [

        //boys_6_14/jackets
        {
          src: 'images/catalog/boys_6_14/jackets/1.jpg',
        },
        {
          src: 'images/catalog/boys_6_14/jackets/2.jpg',
        },
        {
          src: 'images/catalog/boys_6_14/jackets/3.jpg',
        },
        {
          src: 'images/catalog/boys_6_14/jackets/4.jpg',
        },
        {
          src: 'images/catalog/boys_6_14/jackets/5.jpg',
        },
        {
          src: 'images/catalog/boys_6_14/jackets/6.jpg',
        },
        {
          src: 'images/catalog/boys_6_14/jackets/7.jpg',
        },
        {
          src: 'images/catalog/boys_6_14/jackets/8.jpg',
        },



        //girls_6_14/blouses
        {
          src: 'images/catalog/girls_6_14/blouses/1.jpg',
        },
        {
          src: 'images/catalog/girls_6_14/blouses/2.jpg',
        },
        {
          src: 'images/catalog/girls_6_14/blouses/3.jpg',
        },
        {
          src: 'images/catalog/girls_6_14/blouses/4.jpg',
        },
        {
          src: 'images/catalog/girls_6_14/blouses/5.jpg',
        },
        {
          src: 'images/catalog/girls_6_14/blouses/6.jpg',
        },
        {
          src: 'images/catalog/girls_6_14/blouses/7.jpg',
        },
        {
          src: 'images/catalog/girls_6_14/blouses/8.jpg',
        },


        //boys_6months_5year
        {
          src: 'images/catalog/boys_6months_5year/shirts/1.jpg',
        },
        {
          src: 'images/catalog/boys_6months_5year/shirts/2.jpg',
        },
        {
          src: 'images/catalog/boys_6months_5year/shirts/3.jpg',
        },
        {
          src: 'images/catalog/boys_6months_5year/shirts/4.jpg',
        },
        {
          src: 'images/catalog/boys_6months_5year/shirts/5.jpg',
        },
        {
          src: 'images/catalog/boys_6months_5year/shirts/6.jpg',
        },
        {
          src: 'images/catalog/boys_6months_5year/shirts/7.jpg',
        },
        {
          src: 'images/catalog/boys_6months_5year/shirts/8.jpg',
        },


        //girls_6month_5year
        {
          src: 'images/catalog/girls_6month_5year/dresses/1.jpg',
        },
        {
          src: 'images/catalog/girls_6month_5year/dresses/2.jpg',
        },
        {
          src: 'images/catalog/girls_6month_5year/dresses/3.jpg',
        },
        {
          src: 'images/catalog/girls_6month_5year/dresses/4.jpg',
        },
        {
          src: 'images/catalog/girls_6month_5year/dresses/5.jpg',
        },
        {
          src: 'images/catalog/girls_6month_5year/dresses/6.jpg',
        },
        {
          src: 'images/catalog/girls_6month_5year/dresses/7.jpg',
        },
        {
          src: 'images/catalog/girls_6month_5year/dresses/8.jpg',
        },




        //newborns
        {
          src: 'images/catalog/newborns/trousers/1.jpg',
        },
        {
          src: 'images/catalog/newborns/trousers/2.jpg',
        },
        {
          src: 'images/catalog/newborns/trousers/3.jpg',
        },
        {
          src: 'images/catalog/newborns/trousers/4.jpg',
        },
        {
          src: 'images/catalog/newborns/trousers/5.jpg',
        },
        {
          src: 'images/catalog/newborns/trousers/6.jpg',
        },
        {
          src: 'images/catalog/newborns/trousers/7.jpg',
        },
        {
          src: 'images/catalog/newborns/trousers/8.jpg',
        },








        //shoes
        {
          src: 'images/catalog/shoes/1.jpg',
        },
        {
          src: 'images/catalog/shoes/2.jpg',
        },
        {
          src: 'images/catalog/shoes/3.jpg',
        },
        {
          src: 'images/catalog/shoes/4.jpg',
        },
        {
          src: 'images/catalog/shoes/5.jpg',
        },
        {
          src: 'images/catalog/shoes/6.jpg',
        },
        {
          src: 'images/catalog/shoes/7.jpg',
        },
        {
          src: 'images/catalog/shoes/8.jpg',
        },





        //accessories
        {
          src: 'images/catalog/accessories/hats/1.jpg',
        },
        {
          src: 'images/catalog/accessories/hats/2.jpg',
        },
        {
          src: 'images/catalog/accessories/hats/3.jpg',
        },
        {
          src: 'images/catalog/accessories/hats/4.jpg',
        },
        {
          src: 'images/catalog/accessories/hats/5.jpg',
        },
        {
          src: 'images/catalog/accessories/hats/6.jpg', // Желтый
        },
        {
          src: 'images/catalog/accessories/hats/7.jpg', // Оранжевый
        },
        {
          src: 'images/catalog/accessories/hats/8.jpg', // Зеленый
        },



      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  },
};
