const express = require('express');
const router = express.Router();
const { OrderList, User, DeliveryAddress, Cart } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const response = await OrderList.findAll({
      order: [['updatedAt', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['email', 'phone'],
        },
        {
          model: DeliveryAddress,
          attributes: ['address'],
        },
      ],
      raw: true,
    });
    return res.json(response);
  } catch (error) {
    res.json({ error });
  }
});

// Добавление заказа
router.post('/', async (req, res) => {
  const {
    userId,
    totalOrderPrice,
    addressId,
    accepted,
    processed,
    completed,
    canceled,
  } = req.body;
  try {
    const addedOrder = await OrderList.findOrCreate({
      where: { userId, totalOrderPrice },
      default: { addressId, accepted, processed, completed, canceled },
      raw: true,
    });
    return res.json(addedTypeOfProduct);
  } catch (error) {
    console.error('Ошибка добавления данных о заказе в БД!', error);
  }
});

// Изменение статусов заказа администратором
router.patch('/status', async (req, res) => {
  const { id, accepted, processed, completed, canceled } = req.body;

  try {
    const editOrderStatuses = await OrderList.update(
      { accepted, processed, completed, canceled },
      { where: { id } },
      { raw: true }
    );
    return res.json(editOrderStatuses);
  } catch (error) {
    console.error(
      'Ошибка изменения статусов заказа администратором в БД!',
      error
    );
  }
});

// удаление заказа
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await OrderList.destroy({ where: { id } });
    res.sendStatus(200);
    res.end();
  } catch (error) {
    console.error('Ошибка удаления типa продукта из БД!', error);
  }
});

router.get('/carts/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;
    const response = await Cart.findAll({
      where: { orderId },
      order: [['id', 'ASC']],
      raw: true,
    });

    return res.json(response);
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
