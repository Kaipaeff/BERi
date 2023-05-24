import React, { useState } from 'react';
import IOneOrderElement from '../../../../../types/ListOfOrders.type';

import checkMarkRing from '../../../../../img/icons/checkMarkRing.svg';

import styleEditOrderStatus from './EditOrderStatus.module.css';

export default function EditOrderStatus({
  OneOrderElement,
}: {
  OneOrderElement: IOneOrderElement;
}) {
  const [orderAcceptedStatus, setOrderAcceptedStatus] = useState<boolean>(
    OneOrderElement.accepted
  );
  const [orderProcessedStatus, setOrderProcessedStatus] = useState<boolean>(
    OneOrderElement.processed
  );
  const [orderCompletedStatus, setOrderCompletedStatus] = useState<boolean>(
    OneOrderElement.completed
  );
  const [orderCanceledStatus, setOrderCanceledStatus] = useState<boolean>(
    OneOrderElement.canceled
  );

  return (
    <div className={styleEditOrderStatus.conteiner}>
      <form className={styleEditOrderStatus.formConteiner}>

          <h4>Статусы отслеживания заказа:</h4>
          <input
            className={styleEditOrderStatus.inputElement}
            onChange={() => setOrderAcceptedStatus(!orderAcceptedStatus)}
            checked={orderAcceptedStatus}
            name="accepted"
            type="checkbox"
          />{' '}
          В работе

   
          <input
            className={styleEditOrderStatus.inputElement}
            onChange={() => setOrderProcessedStatus(!orderProcessedStatus)}
            checked={orderProcessedStatus}
            name="processed"
            type="checkbox"
          />{' '}
          Готов к отправке

          <input
            className={styleEditOrderStatus.inputElement}
            onChange={() => setOrderCompletedStatus(!orderCompletedStatus)}
            checked={orderCompletedStatus}
            name="completed"
            type="checkbox"
          />{' '}
          Исполнен

          <input
            className={styleEditOrderStatus.inputElement}
            onChange={() => setOrderCanceledStatus(!orderCanceledStatus)}
            checked={orderCanceledStatus}
            name="completed"
            type="checkbox"
          />{' '}
          Отменен
  
          <button
            className={styleEditOrderStatus.submitFormBtn}
            type="submit"
            title="Изменить данные"
            aria-label="add"
          >
            <img
              className={styleEditOrderStatus.checkMarkRing}
              src={checkMarkRing}
              alt="checkMarkRing"
            />
          </button>

      </form>
    </div>
  );
}
