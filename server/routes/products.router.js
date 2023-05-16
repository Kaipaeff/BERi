const express = require('express');
const route = express.Router();
const { Product, Vendor } = require('../db/models');

route.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Vendor,
          attributes: ['name', 'country'],
        },
      ],
    });
    const result = products.map((el) => el.get({ plain: true }));
    // console.log(result);
    res.json(products);
  } catch (error) {
    res.json({ error });
  }
});

module.exports = route;
