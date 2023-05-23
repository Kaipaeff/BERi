import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { INewAge } from '../../../types/Age.type';
import { addAgeFront } from '../../slices/age.slice';

// TODO: Функция для добавления поставщика
export const fetchAddAgeFromBack =
  (NewAge: INewAge): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch('/products/age', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(NewAge),
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();

        dispatch(addAgeFront(data[0]));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };