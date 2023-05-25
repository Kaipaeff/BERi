import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import IOneOrderElement from '../../../types/ListOfOrders.type';
import { deleteOneOrderElementFront } from '../../slices/ListOfOrders/listOfOrders.slice';

// TODO: Функция удаления одного заказа
export const fetchDeleteOneOrderElementFromBack =
  (
    oneOrderElement: IOneOrderElement
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/order/${oneOrderElement.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        dispatch(deleteOneOrderElementFront(oneOrderElement));
      }
    } catch (error) {
      console.error('Ошибка удаления записи из базы данных!', error);
    }
  };
