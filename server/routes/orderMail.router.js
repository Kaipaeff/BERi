const express = require('express');
const sendOrderMail = require('../service/mail-ordering');
const route = express.Router();

route.post('/', (req, res) => {
  const infoProduct = {};
  //   const test = Object.entries(req.body.goods.map((el) => el)).join(', ');
  req.body.goods.forEach((el) => {
    infoProduct.id = el.id;
    infoProduct.name = el.name;
  });
  console.log(infoProduct, '<<<<INFOPRODUCT');
  //   console.log(test, '<<<<<<TEST');
  const { phone, adress } = req.body;

  const message = {
    from: process.env.SMTP_USER,
    to: 'luchsound@gmail.com',
    subject: 'THEME MAIL TEST MAIL SEEEEEEND',
    text: `Номер клиента: ${phone}
    Адрес клиента: ${adress}
    Товары: 123123123
    `,
  };
  sendOrderMail(message);
  res.sendStatus(200);
});

module.exports = route;
