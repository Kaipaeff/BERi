const express = require('express');
const router = express.Router();
const { Category } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const response = await Category.findAll({
      order: [['category', 'ASC']],
      raw: true,
    });
    return res.json(response);
  } catch (error) {
    res.json({ error });
  }
});

// Добавление категории
router.post('/', async (req, res) => {
  const { category } = req.body;
  try {
    const addedCategory = await Category.findOrCreate({
      where: { category },
      raw: true,
    });
    return res.json(addedCategory);
  } catch (error) {
    console.error('Ошибка добавления данных о категории в БД!', error);
  }
});

// Изменение информации о категории
router.put('/', async (req, res) => {
  const { id, category } = req.body;

  try {
    const editVendor = await Category.update(
      { category },
      { where: { id } },
      { raw: true }
    );
    return res.json(editVendor);
  } catch (error) {
    console.error('Ошибка изменения данных о категории в БД!', error);
  }
});

// удаление Вендера
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await Category.destroy({ where: { id } });
    res.sendStatus(200);
    res.end();
  } catch (error) {
    console.error('Ошибка удаления категории из БД!', error);
  }
});

module.exports = router;
