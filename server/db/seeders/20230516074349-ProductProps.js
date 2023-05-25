'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ProductProps',
      [

        //boys_6_14/jackets
        {
          productId: 1,
          colorId: 1,
          sizeId: 12,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 1,
          colorId: 1,
          sizeId: 13,
          salePrice: 3200,
          sale: false,
          quantity: 20,
          amount: 18,
        },

        //id 2
        //propsID 3 4
        {
          productId: 2,
          colorId: 4,
          sizeId: 14,
          salePrice: 2300,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 2,
          colorId: 4,
          sizeId: 15,
          salePrice: 2400,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 3
        //propsID 5 6
        {
          productId: 3,
          colorId: 14,
          sizeId: 16,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 3,
          colorId: 14,
          sizeId: 17,
          salePrice: 2780,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 4
        //propsID 7 8
        {
          productId: 4,
          colorId: 4,
          sizeId: 19,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 4,
          colorId: 4,
          sizeId: 14,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 5
        //propsID 9 10
        {
          productId: 5,
          colorId: 12,
          sizeId: 17,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 5,
          colorId: 12,
          sizeId: 18,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 6
        //propsID 11 12
        {
          productId: 6,
          colorId: 3,
          sizeId: 14,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 6,
          colorId: 3,
          sizeId: 16,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 7
        //propsID 13 14
        {
          productId: 7,
          colorId: 5,
          sizeId: 14,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 7,
          colorId: 5,
          sizeId: 17,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },


        //id 8
        //propsID 15 16
        {
          productId: 8,
          colorId: 9,
          sizeId: 16,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 8,
          colorId: 9,
          sizeId: 19,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //girls_6_14/blouses
        //id 9
        //propsID 17 18
        {
          productId: 9,
          colorId: 1,
          sizeId: 12,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 9,
          colorId: 1,
          sizeId: 13,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },


        //id 10
        //propsID 19 20
        {
          productId: 10,
          colorId: 1,
          sizeId: 14,
          salePrice: 2300,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 10,
          colorId: 1,
          sizeId: 15,
          salePrice: 2400,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 11
        //propsID 21 22
        {
          productId: 11,
          colorId: 12,
          sizeId: 16,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 11,
          colorId: 12,
          sizeId: 17,
          salePrice: 2780,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 12
        //propsID 23 24
        {
          productId: 12,
          colorId: 14,
          sizeId: 19,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 12,
          colorId: 14,
          sizeId: 14,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 13
        //propsID 25 26        
        {
          productId: 13,
          colorId: 1,
          sizeId: 17,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 13,
          colorId: 1,
          sizeId: 18,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },




        //id 14
        //propsID 27 28
        {
          productId: 14,
          colorId: 14,
          sizeId: 14,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 14,
          colorId: 14,
          sizeId: 16,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },





        //id 15
        //propsID 29 30
        {
          productId: 15,
          colorId: 1,
          sizeId: 14,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 15,
          colorId: 1,
          sizeId: 17,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },






        //id 16
        //propsID 30 31
        {
          productId: 16,
          colorId: 10,
          sizeId: 16,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 16,
          colorId: 10,
          sizeId: 19,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },




        //boys_6months_5year
        {
          productId: 17,
          colorId: 1,
          sizeId: 5,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 17,
          colorId: 2,
          sizeId: 6,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 18,
          colorId: 2,
          sizeId: 7,
          salePrice: 2300,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 18,
          colorId: 1,
          sizeId: 8,
          salePrice: 2400,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 19,
          colorId: 1,
          sizeId: 9,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 19,
          colorId: 2,
          sizeId: 10,
          salePrice: 2780,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 20,
          colorId: 1,
          sizeId: 11,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 20,
          colorId: 2,
          sizeId: 11,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 21,
          colorId: 3,
          sizeId: 7,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 21,
          colorId: 4,
          sizeId: 8,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 22,
          colorId: 5,
          sizeId: 6,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 22,
          colorId: 6,
          sizeId: 5,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 23,
          colorId: 7,
          sizeId: 9,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 23,
          colorId: 8,
          sizeId: 10,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 24,
          colorId: 9,
          sizeId: 5,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 24,
          colorId: 10,
          sizeId: 6,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },













        //girls_6month_5year
        {
          productId: 25,
          colorId: 1,
          sizeId: 5,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 25,
          colorId: 2,
          sizeId: 6,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 26,
          colorId: 2,
          sizeId: 7,
          salePrice: 2300,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 26,
          colorId: 1,
          sizeId: 8,
          salePrice: 2400,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 27,
          colorId: 1,
          sizeId: 9,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 27,
          colorId: 2,
          sizeId: 10,
          salePrice: 2780,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 28,
          colorId: 1,
          sizeId: 11,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 28,
          colorId: 2,
          sizeId: 11,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 29,
          colorId: 3,
          sizeId: 7,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 29,
          colorId: 4,
          sizeId: 8,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 30,
          colorId: 5,
          sizeId: 6,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 30,
          colorId: 6,
          sizeId: 5,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 31,
          colorId: 7,
          sizeId: 9,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 31,
          colorId: 8,
          sizeId: 10,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 32,
          colorId: 9,
          sizeId: 5,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 32,
          colorId: 10,
          sizeId: 6,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },








        //newborns
        {
          productId: 33,
          colorId: 1,
          sizeId: 1,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 33,
          colorId: 2,
          sizeId: 2,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 34,
          colorId: 2,
          sizeId: 3,
          salePrice: 2300,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 34,
          colorId: 1,
          sizeId: 4,
          salePrice: 2400,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 35,
          colorId: 1,
          sizeId: 5,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 35,
          colorId: 2,
          sizeId: 6,
          salePrice: 2780,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 36,
          colorId: 1,
          sizeId: 1,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 36,
          colorId: 2,
          sizeId: 2,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 37,
          colorId: 3,
          sizeId: 3,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 37,
          colorId: 4,
          sizeId: 4,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 38,
          colorId: 5,
          sizeId: 6,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 38,
          colorId: 6,
          sizeId: 5,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 39,
          colorId: 7,
          sizeId: 2,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 39,
          colorId: 8,
          sizeId: 3,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 40,
          colorId: 9,
          sizeId: 5,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 40,
          colorId: 10,
          sizeId: 6,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },









        //shoes
        {
          productId: 41,
          colorId: 1,
          sizeId: 20,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 41,
          colorId: 2,
          sizeId: 21,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 41,
          colorId: 3,
          sizeId: 22,
          salePrice: 2300,
          sale: true,
          quantity: 20,
          amount: 18,
        },


        {
          productId: 42,
          colorId: 1,
          sizeId: 23,
          salePrice: 2400,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 42,
          colorId: 1,
          sizeId: 24,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 42,
          colorId: 3,
          sizeId: 26,
          salePrice: 2780,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        {
          productId: 43,
          colorId: 1,
          sizeId: 27,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 43,
          colorId: 2,
          sizeId: 28,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 43,
          colorId: 3,
          sizeId: 29,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },



        {
          productId: 44,
          colorId: 4,
          sizeId: 30,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 44,
          colorId: 5,
          sizeId: 31,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 44,
          colorId: 6,
          sizeId: 32,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        {
          productId: 45,
          colorId: 7,
          sizeId: 33,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 45,
          colorId: 8,
          sizeId: 34,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 45,
          colorId: 9,
          sizeId: 35,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },




        {
          productId: 46,
          colorId: 10,
          sizeId: 36,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 46,
          colorId: 10,
          sizeId: 37,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 46,
          colorId: 10,
          sizeId: 38,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },


        {
          productId: 47,
          colorId: 4,
          sizeId: 39,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 47,
          colorId: 5,
          sizeId: 40,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 47,
          colorId: 6,
          sizeId: 41,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        {
          productId: 48,
          colorId: 7,
          sizeId: 42,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 48,
          colorId: 8,
          sizeId: 43,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 48,
          colorId: 9,
          sizeId: 44,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },








        //accessories
        {
          productId: 49,
          colorId: 1,
          sizeId: 47,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 49,
          colorId: 2,
          sizeId: 47,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 50,
          colorId: 2,
          sizeId: 47,
          salePrice: 2300,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 50,
          colorId: 1,
          sizeId: 47,
          salePrice: 2400,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 51,
          colorId: 1,
          sizeId: 47,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 51,
          colorId: 2,
          sizeId: 47,
          salePrice: 2780,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 52,
          colorId: 1,
          sizeId: 47,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 52,
          colorId: 2,
          sizeId: 47,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 53,
          colorId: 3,
          sizeId: 47,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 53,
          colorId: 4,
          sizeId: 47,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 54,
          colorId: 5,
          sizeId: 47,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 54,
          colorId: 6,
          sizeId: 47,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 55,
          colorId: 7,
          sizeId: 47,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 55,
          colorId: 8,
          sizeId: 47,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 56,
          colorId: 9,
          sizeId: 47,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 56,
          colorId: 10,
          sizeId: 47,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },







      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductProps', null, {});
  },
};
