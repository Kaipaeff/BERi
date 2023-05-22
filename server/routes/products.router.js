const express = require('express');
const route = express.Router();
const {
  Product,
  Vendor,
  ProductProps,
  ProductType,
  Age,
  Image,
  ProductImage,
} = require('../db/models');
const db = require('../db/models/index');

route.get('/', async (req, res) => {
  try {
    const findProducts = await Product.findAll({
      include: [
        {
          model: Image,
          through: {
            model: ProductImage,
          },
          attributes: ['src'],
        },
        {
          model: Vendor,
          attributes: ['name', 'country', 'premium'],
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
    console.log(products[0].Images);
    res.json(products);
  } catch (error) {
    res.json({ error });
  }
});

route.get('/categories', async (req, res) => {
  try {
    const findCategories = await ProductType.findAll();

    const categories = findCategories.map((el) => el.get({ plain: true }));

    res.json(categories);
  } catch (error) {
    res.json({ error });
  }
});

route.get('/age', async (req, res) => {
  try {
    const findAge = await Age.findAll();

    const age = findAge.map((el) => el.get({ plain: true }));

    res.json(age);
  } catch (error) {
    res.json({ error });
  }
});

module.exports = route;
