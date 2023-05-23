const express = require('express');
const router = express.Router();
const { ProductType } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const response = await ProductType.findAll({
      order: [['productType', 'ASC']],
      raw: true,
    });
    return res.json(response);
  } catch (error) {
    res.json({ error });
  }
});

// Добавление типа продукта
router.post('/', async (req, res) => {
  const { productType } = req.body;
  try {
    const addedTypeOfProduct = await ProductType.findOrCreate({
      where: { productType },
      raw: true,
    });
    return res.json(addedTypeOfProduct);
  } catch (error) {
    console.error('Ошибка добавления данных о типe продукта в БД!', error);
  }
});

// Изменение информации о типе продукта
router.put('/', async (req, res) => {
  const { id, productType } = req.body;

  try {
    const editTypeOfProduct = await ProductType.update(
      { productType },
      { where: { id } },
      { raw: true }
    );
    return res.json(editTypeOfProduct);
  } catch (error) {
    console.error('Ошибка изменения данных о типe продукта в БД!', error);
  }
});

// удаление Вендера
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await ProductType.destroy({ where: { id } });
    res.sendStatus(200);
    res.end();
  } catch (error) {
    console.error('Ошибка удаления типa продукта из БД!', error);
  }
});

module.exports = router;
