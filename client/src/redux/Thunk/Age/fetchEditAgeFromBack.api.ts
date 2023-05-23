import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import IOneAge from '../../../types/Age.type';
import { editOneAgeFront } from '../../slices/age.slice';

// TODO: Функция для возрастной категории
export const fetchEditAgeFromBack =
  (EditOneAge: IOneAge): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/products/age`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(EditOneAge),
        credentials: 'include',
      });
      if (response.ok) {
        dispatch(editOneAgeFront(EditOneAge));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
