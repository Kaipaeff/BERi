const express = require('express');
const router = express.Router();
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const response = await User.findAll({
      order: [['email', 'ASC']],
      raw: true,
    });
    console.log(response);
    return res.json(response);
  } catch (error) {
    res.json({ error });
  }
});

// // добавление адреса доставки
// router.post('/address', async (req, res) => {
//   const { address, userId } = req.body;
//   try {
//     const response = await DeliveryAddress.create({
//       address,
//       userId,
//     });

//     return res.json(response);
//   } catch (error) {
//     console.error('Ошибка добавления записи в БД!', error);
//   }
// });

// // Изменение адреса доставки в БД
// router.put('/address', async (req, res) => {
//   const { id, address, userId } = req.body;

//   try {
//     const editedAddress = await DeliveryAddress.update(
//       { address },
//       { where: { id, userId } },
//       { raw: true }
//     );
//     return res.json(editedAddress);
//   } catch (error) {
//     console.error('Ошибка изменения адреса в БД!', error);
//   }
// });

// удаление Юзера
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await User.destroy({ where: { id } });
    res.sendStatus(200);
    res.end();
  } catch (error) {
    console.error('Ошибка удаления адреса из БД!', error);
  }
});

module.exports = router;
