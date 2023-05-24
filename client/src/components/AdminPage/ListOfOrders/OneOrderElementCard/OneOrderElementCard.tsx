import React, { useState } from 'react';
import IOneOrderElement from '../../../../types/ListOfOrders.type';

import editIconBtn from '../../../../img/icons/editIconBtn.svg';
import deleteIconBtn from '../../../../img/icons/deleteIconBtn.svg';
import clipboardText from '../../../../img/icons/clipboardText.svg';
import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';

import styleOneOrderElementCard from './OneOrderElementCard.module.css';
import FiledRingIndicator from '../FiledRingIndicator/FiledRingIndicator';
import OrderDetail from '../OrderDetail/OrderDetail';
import EditOrderStatus from './EditOrderStatus/EditOrderStatus';

export default function OneOrderElementCard({
  OneOrderElement,
}: {
  OneOrderElement: IOneOrderElement;
}) {
  const [editOrderStatus, setEditOrderStatus] = useState<boolean>(false);
  const [orderDetailSelector, setOrderDetailSelector] =
    useState<boolean>(false);

  return (
    <>
      <div className={styleOneOrderElementCard.conteiner}>
        <div className={styleOneOrderElementCard.columnId}>
          {OneOrderElement.id}
        </div>
        <div className={styleOneOrderElementCard.columnPrice}>
          {OneOrderElement.totalOrderPrice}
        </div>
        <div className={styleOneOrderElementCard.columnEmail}>
          {OneOrderElement['User.email']}
        </div>
        <div className={styleOneOrderElementCard.columnPhone}>
          {OneOrderElement['User.phone']}
        </div>
        <div className={styleOneOrderElementCard.columnAddress}>
          {OneOrderElement['DeliveryAddress.address']}
        </div>
        <div className={styleOneOrderElementCard.columnOrderData}>
          {OneOrderElement.createdAt.toLocaleString().slice(0, 10)}
        </div>

        <div className={styleOneOrderElementCard.columnStatuses}>
          {OneOrderElement.accepted ? (
            <FiledRingIndicator colorCode={'#FFD700'} />
          ) : (
            <FiledRingIndicator colorCode={'#FFFFFF'} />
          )}
          {OneOrderElement.processed ? (
            <FiledRingIndicator colorCode={'#00FFFF'} />
          ) : (
            <FiledRingIndicator colorCode={'#FFFFFF'} />
          )}
          {OneOrderElement.completed ? (
            <FiledRingIndicator colorCode={'#008000'} />
          ) : (
            <FiledRingIndicator colorCode={'#FFFFFF'} />
          )}
          {OneOrderElement.canceled ? (
            <FiledRingIndicator colorCode={'#FF0000'} />
          ) : (
            <FiledRingIndicator colorCode={'#FFFFFF'} />
          )}
        </div>

        <div className={styleOneOrderElementCard.columnButtons}>
          <span
            onClick={() => {
              if (!orderDetailSelector) {
                setEditOrderStatus(!editOrderStatus);
              }
            }}
            title="Изменить"
            aria-label="edit"
          >
            <img
              className={styleOneOrderElementCard.editIconBtn}
              src={editIconBtn}
              alt="editIconBtn"
            />
          </span>
          <span
            onClick={() => {
              if (!editOrderStatus) {
                setOrderDetailSelector(!orderDetailSelector);
              }
            }}
            title="Открыть заказ"
            aria-label="orderopen"
          >
            <img
              className={styleOneOrderElementCard.clipboardTextBtn}
              src={clipboardText}
              alt="clipboardText"
            />
          </span>
          <span
            onClick={() => console.log('Нажата кнопка удалить ЗАКАЗ !!!')}
            title="Удалить"
            aria-label="delete"
          >
            <img
              className={styleOneOrderElementCard.deleteIconBtn}
              src={deleteIconBtn}
              alt="deleteIconBtn"
            />
          </span>
        </div>
      </div>
      {!editOrderStatus && orderDetailSelector && <OrderDetail />}
      {editOrderStatus && !orderDetailSelector && <EditOrderStatus OneOrderElement={OneOrderElement}  />}
    </>
  );
}
