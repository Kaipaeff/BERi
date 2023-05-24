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
const productRoutes = require('./routes/products.router');
const accountRoutes = require('./routes/account.router');
const userRoutes = require('./routes/user.router');
const vendorRoutes = require('./routes/vendor.router');
const categoriesRoutes = require('./routes/category.router');
const colorSchemeRoutes = require('./routes/colorschemes.router');
const sizesRoutes = require('./routes/sizes.rourer');
const typeofproductRouter = require('./routes/typesofproduct.router');
const router = require('./routes/index');
const errorMiddledware = require('./middlewares/error-middleware');

// вызов функции проверки соединения с базоый данных
dbCheck();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use('/api', router);
app.use(errorMiddledware);

//роутеры

app.use('/user', userRoutes);
app.use('/products', productRoutes);
app.use('/account', accountRoutes);
app.use('/vendor', vendorRoutes);
app.use('/categories', categoriesRoutes);
app.use('/colorschemes', colorSchemeRoutes);
app.use('/sizes', sizesRoutes);
app.use('/typeofproduct', typeofproductRouter);

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
