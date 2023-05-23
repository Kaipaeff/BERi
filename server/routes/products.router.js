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

    console.log(products);

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

// Добавление возрастной категории
route.post('/age', async (req, res) => {
  const { age } = req.body;
  try {
    const addedAge = await Age.findOrCreate({
      where: { age },
      raw: true,
    });
    return res.json(addedAge);
  } catch (error) {
    console.error(
      'Ошибка добавления данных о возрастной категории в БД!',
      error
    );
  }
});

// Изменение информации о возрастной категории
route.put('/age', async (req, res) => {
  const { id, age } = req.body;

  try {
    const editAge = await Age.update({ age }, { where: { id } }, { raw: true });
    return res.json(editAge);
  } catch (error) {
    console.error(
      'Ошибка изменения данных о возрастной категории в БД!',
      error
    );
  }
});

// удаление возрастной категории
route.delete('/age/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await Age.destroy({ where: { id } });
    res.sendStatus(200);
    res.end();
  } catch (error) {
    console.error('Ошибка удаления категории из БД!', error);
  }
});

module.exports = route;
