const express = require('express');
const router = express.Router();
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const response = await User.findAll({
      order: [['email', 'ASC']],
      raw: true,
    });
    // console.log(response);
    return res.json(response);
  } catch (error) {
    res.json({ error });
  }
});

// Изменение адреса доставки в БД
router.put('/', async (req, res) => {
  const { id, email, phone, isAdmin, isActivated } = req.body;

  try {
    const editedUser = await User.update(
      { email, phone, isAdmin, isActivated },
      { where: { id } },
      { raw: true }
    );
    return res.json(editedUser);
  } catch (error) {
    console.error('Ошибка изменения адреса в БД!', error);
  }
});

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
