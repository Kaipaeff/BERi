const express = require('express');
const app = express();
require('@babel/register');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
const cors = require('cors');

//импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

// импорт роутов
const productRoutes = require('./routes/products.router');
const accountRoutes = require('./routes/account.router');

// вызов функции проверки соединения с базоый данных
dbCheck();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//роутеры

app.use('/products', productRoutes);
app.use('/account', accountRoutes);

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
