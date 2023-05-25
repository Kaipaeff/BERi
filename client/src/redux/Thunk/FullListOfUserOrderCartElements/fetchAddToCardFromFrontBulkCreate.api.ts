import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { INewCartElement } from '../../../types/ListOfOrders.type';
import {
  addOrderElementFront,
  setCurrentOrderId,
} from '../../slices/ListOfOrders/listOfOrders.slice';

// TODO: Функция для добавления заказа
export const fetchAddToCardFromFrontBulkCreate =
  (
    newCartElement: INewCartElement[]
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    console.log('>>>>>>>>>>>>>>>> NEW CART ELEMET', newCartElement);

    try {
      await fetch('/order/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCartElement),
        credentials: 'include',
      });
    } catch (error) {
      console.log(error);
      // return Promise.reject(new Error('400'));
    }
  };
