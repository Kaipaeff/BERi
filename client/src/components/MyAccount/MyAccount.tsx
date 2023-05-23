import React, { useContext, useEffect, useState } from 'react';

import styleMyAccount from './MyAccount.module.css';
import DeliveryAddresses from '../DeliveryAddresses/DeliveryAddresses';
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';

export default function MyAccount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [navigatorSelector, setNavigatorSelector] = useState(0);
  const { storeContext } = useContext(Context);

  const navigate = useNavigate();

  const userId = storeContext.user.id;

  return (
    <div className={styleMyAccount.conteiner}>
      <div className={styleMyAccount.title}>
        <h1>Личный кабинет</h1>
      </div>
      <div className={styleMyAccount.dashboard}>
        <div className={styleMyAccount.navigator}>
          <div className={styleMyAccount.navigatorlink}>
            <p
              className={styleMyAccount.dashboarlink}
              onClick={() => setNavigatorSelector(0)}
            >
              Информация
            </p>
            <p
              className={styleMyAccount.dashboarlink}
              onClick={() => setNavigatorSelector(1)}
            >
              Заказы
            </p>
            <p
              className={styleMyAccount.dashboarlink}
              onClick={() => setNavigatorSelector(2)}
            >
              Адреса доставки
            </p>
            <p
              className={styleMyAccount.dashboarlink}
              onClick={() => setNavigatorSelector(3)}
            >
              Регистрационные данные
            </p>
            <p
              className={styleMyAccount.dashboarlink}
              onClick={() => setNavigatorSelector(4)}
            >
              Избранное
            </p>
            <p
              className={styleMyAccount.dashboarlink}
              onClick={() => navigate('/')}
            >
              Выход
            </p>
          </div>
        </div>
        <div className={styleMyAccount.navigatorinfo}>
          {!navigatorSelector && (
            <>
              <h4 className={styleMyAccount.dashboardtitleinfo}>
                Добро пожаловать на Вашу персональную страницу...
              </h4>

              <p>
                На персональной странице пользователя Вы можете просматривать
                свои последние заказы, управлять адресами доставки и выставления
                счетов, а также редактировать свой пароль и данные учетной
                записи.
              </p>
              <p>
                Для получения интересующей Вас информации используйте
                навигационную панель в левой части страницы.
              </p>
            </>
          )}
          {navigatorSelector === 1 && (
            <>
              <h4 className={styleMyAccount.dashboardtitleinfo}>
                Ваши последние заказы...
              </h4>

              <p>
                Здесь должен мапиться массив с данными о заказах пользователя...
              </p>
            </>
          )}
          {navigatorSelector === 2 && <DeliveryAddresses userId={userId} />}
          {navigatorSelector === 3 && (
            <>
              <h4 className={styleMyAccount.dashboardtitleinfo}>
                регистрационные данные пользователя...
              </h4>

              <p>
                Здесь должны быть указаны регистрационные данные пользователя...
              </p>
            </>
          )}
          {navigatorSelector === 4 && (
            <>
              <h4 className={styleMyAccount.dashboardtitleinfo}>
                Избранное...
              </h4>

              <p>Здесь должен мапиться массив с избранными товарами...</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
