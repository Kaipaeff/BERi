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
          colorId: 4,
          sizeId: 12,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 1,
          colorId: 4,
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
        //id 17
        //propsID 32 33
        {
          productId: 17,
          colorId: 8,
          sizeId: 5,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 17,
          colorId: 8,
          sizeId: 6,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 18
        //propsID 34 35
        {
          productId: 18,
          colorId: 6,
          sizeId: 7,
          salePrice: 2300,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 18,
          colorId: 6,
          sizeId: 8,
          salePrice: 2400,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 19
        //propsID 36 37
        {
          productId: 19,
          colorId: 12,
          sizeId: 9,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 19,
          colorId: 12,
          sizeId: 10,
          salePrice: 2780,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 20
        //propsID 38 39
        {
          productId: 20,
          colorId: 5,
          sizeId: 11,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 20,
          colorId: 5,
          sizeId: 11,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },


        //id 21
        //propsID 40 41
        {
          productId: 21,
          colorId: 11,
          sizeId: 7,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 21,
          colorId: 11,
          sizeId: 8,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },




        //id 22
        //propsID 42 43
        {
          productId: 22,
          colorId: 1,
          sizeId: 6,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 22,
          colorId: 1,
          sizeId: 5,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 23
        //propsID 44 45
        {
          productId: 23,
          colorId: 6,
          sizeId: 9,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 23,
          colorId: 6,
          sizeId: 10,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },




        //id 24
        //propsID 46 47
        {
          productId: 24,
          colorId: 7,
          sizeId: 5,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 24,
          colorId: 7,
          sizeId: 6,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },






        ////////////////////////////////////////////////////////////






        //girls_6month_5year

        //id 25
        //propsID 48 49

        {
          productId: 25,
          colorId: 6,
          sizeId: 5,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 25,
          colorId: 6,
          sizeId: 6,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },


        //id 26
        //propsID 50 51

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
          colorId: 7,
          sizeId: 8,
          salePrice: 2400,
          sale: false,
          quantity: 20,
          amount: 18,
        },


        //id 27
        //propsID 52 53

        {
          productId: 27,
          colorId: 11,
          sizeId: 9,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 27,
          colorId: 11,
          sizeId: 10,
          salePrice: 2780,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 28
        //propsID 54 55
        {
          productId: 28,
          colorId: 11,
          sizeId: 11,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 28,
          colorId: 11,
          sizeId: 11,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 29
        //propsID 56 57
        {
          productId: 29,
          colorId: 1,
          sizeId: 7,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 29,
          colorId: 1,
          sizeId: 8,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 30
        //propsID 58 59
        {
          productId: 30,
          colorId: 14,
          sizeId: 6,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 30,
          colorId: 14,
          sizeId: 5,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 31
        //propsID 60 61
        {
          productId: 31,
          colorId: 14,
          sizeId: 9,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 31,
          colorId: 14,
          sizeId: 10,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 32
        //propsID 62 63
        {
          productId: 32,
          colorId: 12,
          sizeId: 5,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 32,
          colorId: 12,
          sizeId: 6,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },








        //newborns

        //id 33
        //propsID 64 65
        {
          productId: 33,
          colorId: 6,
          sizeId: 1,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 33,
          colorId: 6,
          sizeId: 2,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },


        //id 34
        //propsID 66 67

        {
          productId: 34,
          colorId: 13,
          sizeId: 3,
          salePrice: 2300,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 34,
          colorId: 13,
          sizeId: 4,
          salePrice: 2400,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 35
        //propsID 68 69
        {
          productId: 35,
          colorId: 12,
          sizeId: 5,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 35,
          colorId: 12,
          sizeId: 6,
          salePrice: 2780,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 36
        //propsID 70 71
        {
          productId: 36,
          colorId: 11,
          sizeId: 1,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 36,
          colorId: 11,
          sizeId: 2,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 37
        //propsID 72 73
        {
          productId: 37,
          colorId: 7,
          sizeId: 3,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 37,
          colorId: 7,
          sizeId: 4,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 38
        //propsID 74 75
        {
          productId: 38,
          colorId: 6,
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



        //id 39
        //propsID 76 77
        {
          productId: 39,
          colorId: 1,
          sizeId: 2,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 39,
          colorId: 1,
          sizeId: 3,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 40
        //propsID 78 79
        {
          productId: 40,
          colorId: 15,
          sizeId: 5,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 40,
          colorId: 15,
          sizeId: 6,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },









        //shoes

        //id 41
        //propsID 80 81 82
        {
          productId: 41,
          colorId: 14,
          sizeId: 20,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 41,
          colorId: 14,
          sizeId: 21,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 41,
          colorId: 14,
          sizeId: 22,
          salePrice: 2300,
          sale: true,
          quantity: 20,
          amount: 18,
        },



        //id 42
        //propsID 83 84 85
        {
          productId: 42,
          colorId: 14,
          sizeId: 23,
          salePrice: 2400,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 42,
          colorId: 14,
          sizeId: 24,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 42,
          colorId: 14,
          sizeId: 26,
          salePrice: 2780,
          sale: false,
          quantity: 20,
          amount: 18,
        },




        //id 43
        //propsID 86 87 88
        {
          productId: 43,
          colorId: 7,
          sizeId: 27,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 43,
          colorId: 7,
          sizeId: 28,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 43,
          colorId: 7,
          sizeId: 29,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },




        //id 44
        //propsID 89 90 91
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
          colorId: 4,
          sizeId: 31,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 44,
          colorId: 4,
          sizeId: 32,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },




        //id 45
        //propsID 92 93 94
        {
          productId: 45,
          colorId: 12,
          sizeId: 33,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 45,
          colorId: 12,
          sizeId: 34,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 45,
          colorId: 12,
          sizeId: 35,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },






        //id 46
        //propsID 95 96 97
        {
          productId: 46,
          colorId: 5,
          sizeId: 36,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 46,
          colorId: 5,
          sizeId: 37,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 46,
          colorId: 5,
          sizeId: 38,
          salePrice: 3100,
          sale: false,
          quantity: 20,
          amount: 18,
        },




        //id 47
        //propsID 98 99 100
        {
          productId: 47,
          colorId: 2,
          sizeId: 39,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 47,
          colorId: 2,
          sizeId: 40,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 47,
          colorId: 2,
          sizeId: 41,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },





        //id 48
        //propsID 101 102 103
        {
          productId: 48,
          colorId: 6,
          sizeId: 42,
          salePrice: 3399,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 48,
          colorId: 6,
          sizeId: 43,
          salePrice: 3500,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 48,
          colorId: 6,
          sizeId: 44,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },








        //accessories

        //id 49
        //propsID 104 105
        {
          productId: 49,
          colorId: 7,
          sizeId: 47,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 49,
          colorId: 7,
          sizeId: 47,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },




        //id 50
        //propsID 106 107
        {
          productId: 50,
          colorId: 11,
          sizeId: 47,
          salePrice: 2300,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 50,
          colorId: 11,
          sizeId: 47,
          salePrice: 2400,
          sale: false,
          quantity: 20,
          amount: 18,
        },



        //id 51
        //propsID 108 109
        {
          productId: 51,
          colorId: 6,
          sizeId: 47,
          salePrice: 2999,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 51,
          colorId: 6,
          sizeId: 47,
          salePrice: 2780,
          sale: false,
          quantity: 20,
          amount: 18,
        },




        //id 52
        //propsID 110 111
        {
          productId: 52,
          colorId: 14,
          sizeId: 47,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 52,
          colorId: 14,
          sizeId: 47,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },


        //id 53
        //propsID 112 113
        {
          productId: 53,
          colorId: 12,
          sizeId: 47,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 53,
          colorId: 12,
          sizeId: 47,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },





        //id 54
        //propsID 114 115 116
        {
          productId: 54,
          colorId: 11,
          sizeId: 47,
          salePrice: 2699,
          sale: true,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 54,
          colorId: 12,
          sizeId: 47,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },
        {
          productId: 54,
          colorId: 7,
          sizeId: 47,
          salePrice: 2800,
          sale: false,
          quantity: 20,
          amount: 18,
        },




        // //id 55
        // //propsID 116 117
        // {
        //   productId: 55,
        //   colorId: 4,
        //   sizeId: 47,
        //   salePrice: 3399,
        //   sale: true,
        //   quantity: 20,
        //   amount: 18,
        // },
        // {
        //   productId: 55,
        //   colorId: 4,
        //   sizeId: 47,
        //   salePrice: 3500,
        //   sale: false,
        //   quantity: 20,
        //   amount: 18,
        // },


        // //id 56
        // //propsID 118 119
        // {
        //   productId: 56,
        //   colorId: 2,
        //   sizeId: 47,
        //   salePrice: 2999,
        //   sale: true,
        //   quantity: 20,
        //   amount: 18,
        // },
        // {
        //   productId: 56,
        //   colorId: 2,
        //   sizeId: 47,
        //   salePrice: 3100,
        //   sale: false,
        //   quantity: 20,
        //   amount: 18,
        // },







      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductProps', null, {});
  },
};
