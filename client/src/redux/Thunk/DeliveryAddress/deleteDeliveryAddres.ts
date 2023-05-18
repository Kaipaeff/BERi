import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import IDeliveryAddress from '../../../types/DeliveryAddress';
import { deleteDeliveryAddressFront } from '../../slices/DeliveryAddress/deliveryAddress.slice';

// TODO: Функция для удаления адреса
export const fetchDeleteTodoTasks =
  (
    oneDeliveryAdress: IDeliveryAddress
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/account/address/${oneDeliveryAdress.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        dispatch(deleteDeliveryAddressFront(oneDeliveryAdress))
      }
    } catch (error) {
      console.error('Ошибка удаления записи из базы данных!', error);
    }
  };
