import React, { useContext, useEffect, useState } from 'react';
import IOneOrderElement from '../../../../types/ListOfOrders.type';

import styleOrderDetail from './OrderDetail.module.css';

import arrawLeft from '../../../../img/icons/arrow-left.svg';
import phoneIcon from '../../../../img/icons/phone.svg';
import mailIcon from '../../../../img/icons/email.svg';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';
import { Context } from '../../../../index';
import { RootState } from '../../../../types/types';
import { getFullListOfUserOrderCartElementsFromBack } from '../../../../redux/Thunk/FullListOfUserOrderCartElements/getFullListOfUserOrderCartElementsFromBack';
import { BsCircleFill } from 'react-icons/bs';
import IOneOrderedCartElement from '../../../../types/Cart.type';
import OneCartOrderedElement from '../OneCartOrderedElement/OneCartOrderedElement';

export default function OrderDetail({
  showOneOrder,
  setShowOneOrder,
  selectedOrder,
}: {
  showOneOrder: boolean;
  setShowOneOrder: React.Dispatch<React.SetStateAction<boolean>>;
  selectedOrder: IOneOrderElement;
}) {
  const { storeContext } = useContext(Context);
  const dispatch = useAppDispatch();

  const [userIsAdmin, setUserIsAdmin] = useState(false);

  const allUserCartOrderedElements = useAppSelector(
    (state: RootState) =>
      state.FullListOfUserOrderCartElementsReducer.allUserCartOrderedElements
  );

  // TODO: функция по определению статуса userIsAdmin

  useEffect(() => {
    setUserIsAdmin(storeContext.isAuth && storeContext.user.isAdmin);
  }, []);

  // todo-------------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getFullListOfUserOrderCartElementsFromBack(selectedOrder.id));
  }, []);

  return (
    <React.Fragment>
      <div>
        <p
          className={styleOrderDetail.backArrow}
          onClick={() => setShowOneOrder(false)}
        >
          <img src={arrawLeft} alt="arrawLeft" />К списку ордеров
        </p>
      </div>
      <div className={styleOrderDetail.mainOrderInfo}>
        <div className={styleOrderDetail.firstRow}>
          <span>Номер заказа: {selectedOrder.id}</span>
          <span>
            Дата оформления:{' '}
            {selectedOrder.createdAt.toLocaleString().slice(0, 10)}
          </span>
          <span>Сумма: {selectedOrder.totalOrderPrice} руб</span>
        </div>
        <div className={styleOrderDetail.secondRow}>
          <span>
            <img
              src={mailIcon}
              alt="mail"
              className={styleOrderDetail.mailIco}
            />{' '}
            {selectedOrder['User.email']}
          </span>
          <span>
            <img
              src={phoneIcon}
              alt="phone"
              className={styleOrderDetail.phoneIco}
            />{' '}
            {selectedOrder['User.phone']}
          </span>
        </div>
        <div className={styleOrderDetail.statuses}>
          <span>Статусы отслеживания заказа:</span>
          {selectedOrder.accepted ? (
            <BsCircleFill style={{ color: '#FFD700' }} />
          ) : (
            <BsCircleFill style={{ color: '#D6D6D6' }} />
          )}
          Принят в работу
          {selectedOrder.processed ? (
            <BsCircleFill style={{ color: '#00FFFF' }} />
          ) : (
            <BsCircleFill style={{ color: '#D6D6D6' }} />
          )}
          Готов к отправке
          {selectedOrder.completed ? (
            <BsCircleFill style={{ color: '#008000' }} />
          ) : (
            <BsCircleFill style={{ color: '#D6D6D6' }} />
          )}
          Исполнен
          {selectedOrder.canceled ? (
            <BsCircleFill style={{ color: '#FF0000' }} />
          ) : (
            <BsCircleFill style={{ color: '#D6D6D6' }} />
          )}
          Отменен
        </div>
      </div>
      <div className={styleOrderDetail.tableTitle}>
        <div className={styleOrderDetail.columnArticle}>Артикул</div>
        <div className={styleOrderDetail.columnName}>Наименование</div>
        <div className={styleOrderDetail.columnQuantity}>Количество</div>
        <div className={styleOrderDetail.columnPrice}>Стоимость</div>
        <div className={styleOrderDetail.columnTotalAmount}>Сумма</div>
      </div>
      {allUserCartOrderedElements.map((el: IOneOrderedCartElement) => (
        <React.Fragment key={el.id}>
          <OneCartOrderedElement CartElement={el}/>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
