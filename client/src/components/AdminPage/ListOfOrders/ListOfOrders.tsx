import React, { useContext, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';

import { Context } from '../../../index';
import { RootState } from '../../../types/types';

import search from '../../../img/icons/search.svg';
import searchOff from '../../../img/icons/searchOff.svg';
import arrowRight from '../../../img/icons/arrowRight.svg';
import closeSymbol from '../../../img/icons/closeSymbol.svg';

import styleListOfOrder from './ListOfOrders.module.css';

import { getFullListOfOrdersFromBack } from '../../../redux/Thunk/ListOfOrders/getFullListOfOrdersFromBack';
import { findOneOrderElementByIdFront } from '../../../redux/slices/ListOfOrders/listOfOrders.slice';
import IOneOrderElement from '../../../types/ListOfOrders.type';
import OneOrderElementCard from './OneOrderElementCard/OneOrderElementCard';

export default function ListOfOrders(): JSX.Element {
  const { storeContext } = useContext(Context);
  const dispatch = useAppDispatch();

  const [userIsAdmin, setUserIsAdmin] = useState(false);

  const fullListOfOrders = useAppSelector(
    (state: RootState) => state.ListOfUserOrdersReduser.fullListOfOreders
  );

  const [findElementInputActive, setFindElementInputActive] = useState(false);
  const [addCardIsActive, setAddCardIsActive] = useState(false);

  const [findOrderById, setFindOrderById] = useState<number>(0);

  // TODO: функция по определению статуса userIsAdmin

  useEffect(() => {
    setUserIsAdmin(storeContext.isAuth && storeContext.user.isAdmin);
  }, []);

  // todo-------------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getFullListOfOrdersFromBack());
  }, []);

  return (
    <>
      <h4 className={styleListOfOrder.titlePage}>ЗАКАЗЫ ПОЛЬЗОВАТЕЛЕЙ</h4>
      <div className={styleListOfOrder.searchRow}>
        {/* {userIsAdmin && !addCardIsActive && (
          <button
            onClick={() => setAddCardIsActive(!addCardIsActive)}
            className={styleListOfOrder.actionBtn}
          >
            Добавить
            <img src={arrowRight} alt="arrowRight" />
          </button>
        )} */}
        {/* {userIsAdmin && addCardIsActive && (
          <button
            onClick={() => setAddCardIsActive(!addCardIsActive)}
            className={styleListOfOrder.cancelBtn}
          >
            Отменить
            <img src={closeSymbol} alt="closeSymbol" />
          </button>
        )} */}

        <div className={styleListOfOrder.filterBlock}>
          <div className={styleListOfOrder.filterFirstElement}>
            <p>Всего заказов: {fullListOfOrders.length}</p>
          </div>

          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
              e.preventDefault();
              if (findOrderById > 0) {
                dispatch(findOneOrderElementByIdFront(findOrderById));
                setFindElementInputActive(!findElementInputActive);
              }
            }}
          >
            <div className={styleListOfOrder.inputBlockConteiner}>
              <input
                className={styleListOfOrder.inputTextElement}
                type="number"
                name="findOrderById"
                value={findOrderById}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFindOrderById(Number(e.target.value))
                }
              />

              {findElementInputActive ? (
                <span title="Отменить поиск" aria-label="find">
                  <button
                    onClick={() => {
                      setFindElementInputActive(!findElementInputActive);
                      setFindOrderById(0);
                      dispatch(getFullListOfOrdersFromBack());
                    }}
                    className={styleListOfOrder.findBtn}
                  >
                    <img
                      className={styleListOfOrder.searchOffSimbol}
                      src={searchOff}
                      alt="search"
                    />
                  </button>
                </span>
              ) : (
                <span title="Найти категорию по названию" aria-label="find">
                  <button type="submit" className={styleListOfOrder.findBtn}>
                    <img
                      className={styleListOfOrder.searchSimbol}
                      src={search}
                      alt="search"
                    />
                  </button>
                </span>
              )}
            </div>
          </form>
        </div>
        {/* )} */}
      </div>

      {/* заголовки таблицы */}
      <div className={styleListOfOrder.tableTitle}>
        <div className={styleListOfOrder.columnId}>№</div>
        <div className={styleListOfOrder.columnPrice}>Стоимость</div>
        <div className={styleListOfOrder.columnEmail}>Электронный адрес</div>
        <div className={styleListOfOrder.columnPhone}>Телефон</div>
        <div className={styleListOfOrder.columnAddress}>Адрес доставки</div>
        <div className={styleListOfOrder.columnDate}>Дата</div>
        <div className={styleListOfOrder.columnStatuses}>Статус</div>
        <div className={styleListOfOrder.columnButtons}>Действия</div>
      </div>
  

      {fullListOfOrders.length ? (
        <div className={styleListOfOrder.content}>
          {fullListOfOrders.map((order: IOneOrderElement) => (
            <React.Fragment key={order.id}>
              <OneOrderElementCard OneOrderElement={order} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <span className={styleListOfOrder.message}>
          Информация о заказах пользователей отсутствует! Попробуйте изменить
          условие поиска...
        </span>
      )}
    </>
  );
}
