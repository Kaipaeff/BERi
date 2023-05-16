const express = require('express');
const route = express.Router();
const { Product } = require('../db/models');

route.get('/product', async (req, res) => {
  try {
    const response = await Product.findAll();
    console.log(response, 'response');
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
