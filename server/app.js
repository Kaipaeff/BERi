const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
require('@babel/register');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

//импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

// импорт роутов
const indexRoutes = require('./routes/indexRoutes');

// вызов функции проверки соединения с базоый данных
dbCheck();

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//роутеры
app.use('/', indexRoutes);

const PORT = process.env.PORT || 3100;

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Сервер запущен на http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log('Ошибка запуска сервера.', error.message);
  }
};
start();
