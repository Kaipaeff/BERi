import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { INewOrderElement } from '../../../types/ListOfOrders.type';
import {
  addOrderElementFront,
  setCurrentOrderId,
} from '../../slices/ListOfOrders/listOfOrders.slice';

// TODO: Функция для добавления заказа
export const fetchAddOrderFromBack =
  (
    NewOrder: INewOrderElement
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch('/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(NewOrder),
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(addOrderElementFront(data));
        dispatch(setCurrentOrderId(data.id));
      }
    } catch (error) {
      console.log(error);
      // return Promise.reject(new Error('400'));
    }
  };
