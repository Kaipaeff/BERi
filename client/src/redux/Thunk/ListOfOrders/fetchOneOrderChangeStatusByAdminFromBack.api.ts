import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { IOneOrderChangeStatus } from '../../../types/ListOfOrders.type';

import { getFullListOfOrdersFromBack } from './getFullListOfOrdersFromBack';

// TODO: Функция для изменения статусов отслеживания заказов администратором
export const fetchOneOrderChangeStatusByAdminFromBack =
  (
    EditOrderStatus: IOneOrderChangeStatus
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/order/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(EditOrderStatus),
        credentials: 'include',
      });
      if (response.ok) {
        dispatch(getFullListOfOrdersFromBack());
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
