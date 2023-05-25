'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ProductImages',
      [

        //boys_6_14/jackets
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


        {
          imgId: 3,
          productId: 3,
          productPropsId: 3,
        },
        {
          imgId: 4,
          productId: 4,
          productPropsId: 4,
        },
        {
          imgId: 5,
          productId: 5,
          productPropsId: 5,
        },
        {
          imgId: 6,
          productId: 6,
          productPropsId: 6,
        },
        {
          imgId: 7,
          productId: 7,
          productPropsId: 7,
        },
        {
          imgId: 8,
          productId: 8,
          productPropsId: 8,
        },



        //girls_6_14/blouses
        {
          imgId: 9,
          productId: 9,
          productPropsId: 9,
        },
        {
          imgId: 10,
          productId: 10,
          productPropsId: 10,
        },
        {
          imgId: 11,
          productId: 11,
          productPropsId: 11,
        },
        {
          imgId: 12,
          productId: 12,
          productPropsId: 12,
        },
        {
          imgId: 13,
          productId: 13,
          productPropsId: 13,
        },
        {
          imgId: 14,
          productId: 14,
          productPropsId: 14,
        },
        {
          imgId: 15,
          productId: 15,
          productPropsId: 15,
        },
        {
          imgId: 16,
          productId: 16,
          productPropsId: 16,
        },




        //boys_6months_5year
        {
          imgId: 17,
          productId: 17,
          productPropsId: 17,
        },
        {
          imgId: 18,
          productId: 18,
          productPropsId: 18,
        },
        {
          imgId: 19,
          productId: 19,
          productPropsId: 19,
        },
        {
          imgId: 20,
          productId: 20,
          productPropsId: 20,
        },
        {
          imgId: 21,
          productId: 21,
          productPropsId: 21,
        },
        {
          imgId: 22,
          productId: 22,
          productPropsId: 22,
        },
        {
          imgId: 23,
          productId: 23,
          productPropsId: 23,
        },
        {
          imgId: 24,
          productId: 24,
          productPropsId: 24,
        },









        //girls_6month_5year
        {
          imgId: 25,
          productId: 25,
          productPropsId: 25,
        },
        {
          imgId: 26,
          productId: 26,
          productPropsId: 26,
        },
        {
          imgId: 27,
          productId: 27,
          productPropsId: 27,
        },
        {
          imgId: 28,
          productId: 28,
          productPropsId: 28,
        },
        {
          imgId: 29,
          productId: 29,
          productPropsId: 29,
        },
        {
          imgId: 30,
          productId: 30,
          productPropsId: 30,
        },
        {
          imgId: 31,
          productId: 31,
          productPropsId: 31,
        },
        {
          imgId: 32,
          productId: 32,
          productPropsId: 32,
        },










        //newborns
        {
          imgId: 33,
          productId: 33,
          productPropsId: 33,
        },
        {
          imgId: 34,
          productId: 34,
          productPropsId: 34,
        },
        {
          imgId: 35,
          productId: 35,
          productPropsId: 35,
        },
        {
          imgId: 36,
          productId: 36,
          productPropsId: 36,
        },
        {
          imgId: 37,
          productId: 37,
          productPropsId: 37,
        },
        {
          imgId: 38,
          productId: 38,
          productPropsId: 38,
        },
        {
          imgId: 39,
          productId: 39,
          productPropsId: 39,
        },
        {
          imgId: 40,
          productId: 40,
          productPropsId: 40,
        },






        //shoes
        {
          imgId: 41,
          productId: 41,
          productPropsId: 41,
        },
        {
          imgId: 42,
          productId: 42,
          productPropsId: 42,
        },
        {
          imgId: 43,
          productId: 43,
          productPropsId: 43,
        },
        {
          imgId: 44,
          productId: 44,
          productPropsId: 44,
        },
        {
          imgId: 45,
          productId: 45,
          productPropsId: 45,
        },
        {
          imgId: 46,
          productId: 46,
          productPropsId: 46,
        },
        {
          imgId: 47,
          productId: 47,
          productPropsId: 47,
        },
        {
          imgId: 48,
          productId: 48,
          productPropsId: 48,
        },







        //accessories
        {
          imgId: 49,
          productId: 49,
          productPropsId: 49,
        },
        {
          imgId: 50,
          productId: 50,
          productPropsId: 50,
        },
        {
          imgId: 51,
          productId: 51,
          productPropsId: 51,
        },
        {
          imgId: 52,
          productId: 52,
          productPropsId: 52,
        },
        {
          imgId: 53,
          productId: 53,
          productPropsId: 53,
        },
        {
          imgId: 54,
          productId: 54,
          productPropsId: 54,
        },
        {
          imgId: 55,
          productId: 55,
          productPropsId: 55,
        },
        {
          imgId: 56,
          productId: 56,
          productPropsId: 56,
        },
     







      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  },
};
