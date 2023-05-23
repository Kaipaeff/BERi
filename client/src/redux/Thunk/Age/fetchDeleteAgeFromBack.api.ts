import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import IOneAge from '../../../types/Age.type';
import { deleteOneAgeFront } from '../../slices/age.slice';

// TODO: Функция для удаления возрастной категории
export const fetchDeleteAgeFromBack =
  (
    OneAge: IOneAge
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`products/age/${OneAge.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        dispatch(deleteOneAgeFront(OneAge));
      }
    } catch (error) {
      console.error('Ошибка удаления записи из базы данных!', error);
    }
  };