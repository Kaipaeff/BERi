import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import IOneTypeOfProduct from '../../../types/TypeOfProducts.type';
import { deleteOneTypeOfProductFront } from '../../slices/TypeOfProduct/typeOfProducts.slice';

// TODO: Функция для удаления типа продукта
export const fetchDeleteOneTypeOfProductFromBack =
  (
    OneTypeOfProduct: IOneTypeOfProduct
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/typeofproduct/${OneTypeOfProduct.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        dispatch(deleteOneTypeOfProductFront(OneTypeOfProduct));
      }
    } catch (error) {
      console.error('Ошибка удаления записи из базы данных!', error);
    }
  };
