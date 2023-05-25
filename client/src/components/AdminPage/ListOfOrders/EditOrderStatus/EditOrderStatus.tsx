import React, { useState } from 'react';
import IOneOrderElement, {
  IOneOrderChangeStatus,
} from '../../../../types/ListOfOrders.type';

import checkMarkRing from '../../../../img/icons/checkMarkRing.svg';

import styleEditOrderStatus from './EditOrderStatus.module.css';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { fetchOneOrderChangeStatusByAdminFromBack } from '../../../../redux/Thunk/ListOfOrders/fetchOneOrderChangeStatusByAdminFromBack.api';
import { editOneOrderElementFront } from '../../../../redux/slices/ListOfOrders/listOfOrders.slice';
import { getFullListOfOrdersFromBack } from '../../../../redux/Thunk/ListOfOrders/getFullListOfOrdersFromBack';

export default function EditOrderStatus({
  OneOrderElement,
  editOrderStatus,
  setEditOrderStatus,
}: // setWasChangedStatus,
{
  OneOrderElement: IOneOrderElement;
  editOrderStatus: boolean;
  setEditOrderStatus: React.Dispatch<React.SetStateAction<boolean>>;
  // setWasChangedStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();

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

  const formEditSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const EditOrderStatus: IOneOrderChangeStatus = {
      id: OneOrderElement.id,
      accepted: orderAcceptedStatus,
      processed: orderProcessedStatus,
      completed: orderCompletedStatus,
      canceled: orderCanceledStatus,
    };

    // const changedOrderElement = {
    //   id: OneOrderElement.id,
    //   accepted: orderAcceptedStatus,
    //   processed: orderProcessedStatus,
    //   completed: orderCompletedStatus,
    //   canceled: orderCanceledStatus,
    //   userId: OneOrderElement.userId,
    //   totalOrderPrice: OneOrderElement.totalOrderPrice,
    //   addressId: OneOrderElement.addressId,
    //   createdAt: OneOrderElement.createdAt,
    //   updatedAt: OneOrderElement.updatedAt,
    //   'User.email': OneOrderElement['User.email'],
    //   'User.phone': OneOrderElement['User.phone'],
    //   'DeliveryAddress.address': OneOrderElement['DeliveryAddress.address'],
    // };

    dispatch(fetchOneOrderChangeStatusByAdminFromBack(EditOrderStatus));
    // setWasChangedStatus(true);
    // dispatch(editOneOrderElementStatusByAdminFront(changedOrderElement));
    // dispatch(editOneOrderElementFront(changedOrderElement));
    dispatch(getFullListOfOrdersFromBack());
    setEditOrderStatus(!editOrderStatus);
  };

  return (
    <div className={styleEditOrderStatus.conteiner}>
      <form
        className={styleEditOrderStatus.formConteiner}
        onSubmit={formEditSubmitHandler}
      >
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
