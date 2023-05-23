const express = require('express');
const router = express.Router();
const { Size } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const response = await Size.findAll({
      order: [['size', 'ASC']],
      raw: true,
    });
    return res.json(response);
  } catch (error) {
    res.json({ error });
  }
});

// Добавление размера
router.post('/', async (req, res) => {
  const { size } = req.body;
  try {
    const addedSize = await Size.findOrCreate({
      where: { size },
      raw: true,
    });
    return res.json(addedSize);
  } catch (error) {
    console.error('Ошибка добавления данных о размере в БД!', error);
  }
});

// Изменение информации о размере
router.put('/', async (req, res) => {
  const { id, size } = req.body;

  try {
    const editSize = await Size.update(
      { size },
      { where: { id } },
      { raw: true }
    );
    return res.json(editSize);
  } catch (error) {
    console.error('Ошибка изменения данных о размере в БД!', error);
  }
});

// удаление размера
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await Size.destroy({ where: { id } });
    res.sendStatus(200);
    res.end();
  } catch (error) {
    console.error('Ошибка удаления размера из БД!', error);
  }
});

module.exports = router;
