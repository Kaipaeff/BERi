import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { editOneTypeOfProductFront } from '../../slices/TypeOfProduct/typeOfProducts.slice';
import IOneTypeOfProduct from '../../../types/TypeOfProducts.type';

// TODO: Функция для изменения типа продуктов
export const fetchEditOneTypeOfProductFromBack =
  (
    EditOneTypeOfProduct: IOneTypeOfProduct
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/typeofproduct`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(EditOneTypeOfProduct),
        credentials: 'include',
      });
      if (response.ok) {
        dispatch(editOneTypeOfProductFront(EditOneTypeOfProduct));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
