const express = require('express');
const router = express.Router();
const { DeliveryAddress } = require('../db/models');

router.get('/address/:id', async (req, res) => {
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

// добавление адреса доставки
router.post('/address', async (req, res) => {
  const { address, userId } = req.body;
  try {
    const response = await DeliveryAddress.create({
      address,
      userId,
    });

    return res.json(response);
  } catch (error) {
    console.error('Ошибка добавления записи в БД!', error);
  }
});

// удаление адреса
router.delete('/address/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await DeliveryAddress.destroy({ where: { id } });
    res.sendStatus(200);
    res.end();
  } catch (error) {
    console.error('Ошибка удаления адреса из БД!', error);
  }
});

module.exports = router;
