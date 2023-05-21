const express = require('express');
const router = express.Router();
const { Vendor } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const response = await Vendor.findAll({
      order: [['name', 'ASC']],
      raw: true,
    });
    console.log(response);
    return res.json(response);
  } catch (error) {
    res.json({ error });
  }
});

// Добавление вендора
router.post('/', async (req, res) => {
  const { id, name, country, premium } = req.body;

  try {
    const addedVendor = await Vendor.findOrCreate(
      { name, country, premium },
      { where: { id } },
      { raw: true }
    );
    return res.json(addedVendor);
  } catch (error) {
    console.error('Ошибка добавления данных о вердере в БД!', error);
  }
});

// Изменение информации о вендоре
router.put('/', async (req, res) => {
  const { id, name, country, premium } = req.body;

  try {
    const editVendor = await Vendor.update(
      { name, country, premium },
      { where: { id } },
      { raw: true }
    );
    return res.json(editVendor);
  } catch (error) {
    console.error('Ошибка изменения данных о вердере в БД!', error);
  }
});

// удаление Вендера
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await User.destroy({ where: { id } });
    res.sendStatus(200);
    res.end();
  } catch (error) {
    console.error('Ошибка удаления вендора из БД!', error);
  }
});

module.exports = router;
