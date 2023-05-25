import React, { useEffect, useState } from 'react';
import IOneOrderElement from '../../../../types/ListOfOrders.type';

import editIconBtn from '../../../../img/icons/editIconBtn.svg';
import deleteIconBtn from '../../../../img/icons/deleteIconBtn.svg';
import clipboardText from '../../../../img/icons/clipboardText.svg';

import styleOneOrderElementCard from './OneOrderElementCard.module.css';
import FiledRingIndicator from '../FiledRingIndicator/FiledRingIndicator';
import OrderDetail from '../OrderDetail/OrderDetail';
import EditOrderStatus from '../EditOrderStatus/EditOrderStatus';
import { BsCircle, BsCircleFill } from 'react-icons/bs';

export default function OneOrderElementCard({
  OneOrderElement,
  setShowOneOrder,
  setSelectedOrder,
}: {
  OneOrderElement: IOneOrderElement;
  setShowOneOrder: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedOrder: React.Dispatch<React.SetStateAction<IOneOrderElement>>;
}) {
  const [editOrderStatus, setEditOrderStatus] = useState<boolean>(false);
  const [orderDetailSelector, setOrderDetailSelector] =
    useState<boolean>(false);

  return (
    <React.Fragment>
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
            <BsCircleFill style={{ color: '#FFD700' }} />
          ) : (
            <BsCircleFill style={{ color: '#FFFFFF' }} />
          )}
          {OneOrderElement.processed ? (
            <BsCircleFill style={{ color: '#00FFFF' }} />
          ) : (
            <BsCircleFill style={{ color: '#FFFFFF' }} />
          )}
          {OneOrderElement.completed ? (
            <BsCircleFill style={{ color: '#008000' }} />
          ) : (
            <BsCircleFill style={{ color: '#FFFFFF' }} />
          )}
          {OneOrderElement.canceled ? (
            <BsCircleFill style={{ color: '#FF0000' }} />
          ) : (
            <BsCircleFill style={{ color: '#FFFFFF' }} />
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
              setShowOneOrder(true);
              setSelectedOrder(OneOrderElement);
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
      {editOrderStatus && !orderDetailSelector && (
        <EditOrderStatus
          OneOrderElement={OneOrderElement}
          editOrderStatus={editOrderStatus}
          setEditOrderStatus={setEditOrderStatus}
        />
      )}
    </React.Fragment>
  );
}
