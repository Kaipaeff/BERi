const express = require('express');
const router = express.Router();
const { Color } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const response = await Color.findAll({
      order: [['color', 'ASC']],
      raw: true,
    });
    return res.json(response);
  } catch (error) {
    res.json({ error });
  }
});

// Добавление цвета
router.post('/', async (req, res) => {
  const { color, colorCode } = req.body;
  try {
    const addedColor = await Color.findOrCreate({
      where: { color, colorCode },
      raw: true,
    });
    return res.json(addedColor);
  } catch (error) {
    console.error('Ошибка добавления данных о цвете в БД!', error);
  }
});

// Изменение информации о цвете
router.put('/', async (req, res) => {
  const { id, color, colorCode } = req.body;

  try {
    const editColor = await Color.update(
      { color, colorCode },
      { where: { id } },
      { raw: true }
    );
    return res.json(editColor);
  } catch (error) {
    console.error('Ошибка изменения данных о цвете в БД!', error);
  }
});

// удаление цвета
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await Color.destroy({ where: { id } });
    res.sendStatus(200);
    res.end();
  } catch (error) {
    console.error('Ошибка удаления цвета из БД!', error);
  }
});

module.exports = router;
