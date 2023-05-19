import React, { useState } from 'react';
import styleAdminMainPage from './AdminMainPage.module.css';
import UsersInfo from '../UsersInfo/UsersInfo';
import VendorInfo from '../VendorInfo/VendorInfo';
import Categories from '../Categories/Categories';
import ProductStore from '../ProductStore/ProductStore';
import ColorTable from '../ColorTable/ColorTable';
import SizeTable from '../SizeTable/SizeTable';

export default function AdminMainPage() {
  const [selectorPage, setSelectorPage] = useState<number>(0);
  return (
    <div className={styleAdminMainPage.conteiner}>
      <h1>Страница администратора</h1>
      <div className={styleAdminMainPage.content}>
        <div className={styleAdminMainPage.selectorPage}>
          <h2>Навигация</h2>
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
            onClick={() => setSelectorPage(0)}
            className={styleAdminMainPage.selectorPageLink}
          >
            Закрыть страницу
          </p>
        </div>

        <div className={styleAdminMainPage.pageContect}>
          {!selectorPage && (
            <h4 className={styleAdminMainPage.pageTitle}>
              Для перемещения по страницам, выберите нужный компонент
              навигации...
            </h4>
          )}
          {selectorPage === 1 && <UsersInfo />}
          {selectorPage === 2 && <VendorInfo />}
          {selectorPage === 3 && <ProductStore />}
          {selectorPage === 4 && <Categories />}
          {selectorPage === 5 && <ColorTable />}
          {selectorPage === 6 && <SizeTable />}
        </div>
      </div>
    </div>
  );
}