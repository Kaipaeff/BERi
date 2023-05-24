import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { INewTypeOfProduct } from '../../../types/TypeOfProducts.type';
import { addTypeOfProductFront } from '../../slices/TypeOfProduct/typeOfProducts.slice';


// TODO: Функция для добавления типа продукта
export const fetchAddTypeOfProductFromBack =
  (NewTypeOfProduct: INewTypeOfProduct): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch('/typeofproduct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(NewTypeOfProduct),
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();

        dispatch(addTypeOfProductFront(data[0]));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };