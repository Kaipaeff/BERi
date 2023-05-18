const express = require('express');
const route = express.Router();
const { Product, Vendor, ProductProps } = require('../db/models');
const db = require('../db/models/index');

route.get('/', async (req, res) => {
  try {
    const findProducts = await Product.findAll({
      include: [
        {
          model: Vendor,
          attributes: ['name', 'country'],
        },
      ],
    });

    const products = findProducts.map((el) => el.get({ plain: true }));

    const findPrices = await ProductProps.findAll({
      attributes: [
        'productId',
        [db.sequelize.fn('MIN', db.sequelize.col('salePrice')), 'minPrice'],
      ],
      group: ['productId'],
    });

    const prices = findPrices.map((el) => el.get({ plain: true }));
    
    products.forEach((product) => {
      const price = prices.find((el) => el.productId === product.id);
      if (price) {
        product.minPrice = Number(price.minPrice);
      }
    });
    
    res.json(products);
  } catch (error) {
    res.json({ error });
  }
});

module.exports = route;
