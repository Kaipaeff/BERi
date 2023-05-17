const express = require('express');
const route = express.Router();
const { DeliveryAddress } = require('../db/models');

route.get('/address/:id', async (req, res) => {
  console.log('ADDRESS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  try {
    const userId = req.params.id;
    const response = await DeliveryAddress.findAll({
      where: { userId },
      order: [['address', 'ASC']],
      raw: true,
    });
    console.log(response);
    return res.json(response);
  } catch (error) {
    res.json({ error });
  }
});

module.exports = route;
