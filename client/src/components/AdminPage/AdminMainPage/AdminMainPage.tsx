import React, { useEffect, useState } from 'react';
import styleAdminMainPage from './AdminMainPage.module.css';
import UsersInfo from '../UsersInfo/UsersInfo';
import VendorInfo from '../VendorInfo/VendorInfo';
import Categories from '../Categories/Categories';
import ProductStore from '../ProductStore/ProductStore';
import ColorTable from '../ColorTable/ColorTable';
import SizeTable from '../SizeTable/SizeTable';
import { useNavigate } from 'react-router-dom';
import TypeOfProduct from '../TypeOfProduct/TypeOfProduct';
import AgePage from '../AgePage/AgePage';
import ListOfOrders from '../ListOfOrders/ListOfOrders';

import arrawLeft from '../../../img/icons/arrow-left.svg'
import settings from '../../../img/icons/settings.svg'


export default function AdminMainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectorPage, setSelectorPage] = useState<number>(0);
  return (
    <div className={styleAdminMainPage.wrapper}>
      <p className={styleAdminMainPage.backArrow} onClick={() => navigate(-1)}><img src={arrawLeft} alt="arrawLeft" />назад</p>
      <div className={styleAdminMainPage.conteiner}>

        <div className={styleAdminMainPage.title}>
          <img className={styleAdminMainPage.titleIcon} src={settings} alt="settings" />
          <h1>Панель администратора</h1>
        </div>
        
        <div className={styleAdminMainPage.content}>
          <div className={styleAdminMainPage.selectorPage}>
            {/* <h2>Навигация</h2> */}

            <p
              onClick={() => setSelectorPage(1)}
              className={styleAdminMainPage.selectorPageLink}
            >
              Пользователи
            </p>

            <p
              onClick={() => setSelectorPage(2)}
              className={styleAdminMainPage.selectorPageLink}
            >
              Поставщики
            </p>

            <p
              onClick={() => setSelectorPage(3)}
              className={styleAdminMainPage.selectorPageLink}
            >
              Товары
            </p>

            <p
              onClick={() => setSelectorPage(4)}
              className={styleAdminMainPage.selectorPageLink}
            >
              Категории
            </p>

            <p
              onClick={() => setSelectorPage(5)}
              className={styleAdminMainPage.selectorPageLink}
            >
              Таблица цветов
            </p>

            <p
              onClick={() => setSelectorPage(6)}
              className={styleAdminMainPage.selectorPageLink}
            >
              Таблица размеров
            </p>

            <p
              onClick={() => setSelectorPage(7)}
              className={styleAdminMainPage.selectorPageLink}
            >
              Типы товаров
            </p>

            <p
              onClick={() => setSelectorPage(8)}
              className={styleAdminMainPage.selectorPageLink}
            >
              Возрастные категории
            </p>

            <p
              onClick={() => setSelectorPage(9)}
              className={styleAdminMainPage.selectorPageLink}
            >
              Заказы
            </p>

            <p
              onClick={() => navigate('/')}
              className={styleAdminMainPage.selectorPageLink}
            >
              Выйти
            </p>

          </div>

          <div className={styleAdminMainPage.pageContect}>
            {!selectorPage && (
              <>
              <h4 className={styleAdminMainPage.pageTitle}>
                Добро пожаловать на страницу панели управления!
              </h4>

              <p>
                Для получения интересующей Вас информации, используйте
                навигационную панель в левой части страницы.
              </p>
              </>
            )}
            {selectorPage === 1 && <UsersInfo />}
            {selectorPage === 2 && <VendorInfo />}
            {selectorPage === 3 && <ProductStore />}
            {selectorPage === 4 && <Categories />}
            {selectorPage === 5 && <ColorTable />}
            {selectorPage === 6 && <SizeTable />}
            {selectorPage === 7 && <TypeOfProduct />}
            {selectorPage === 8 && <AgePage />}
            {selectorPage === 9 && <ListOfOrders />}
          </div>
        </div>
      </div>
    </div>
  );
}
