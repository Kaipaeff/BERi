import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import IOneUser from '../../../types/UserTypes';
import { editOneUserFront } from '../../slices/User/user.slice';

// TODO: Функция для изменения адреса
export const fetchEditOneUser =
  (
    EditOneUser: IOneUser
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/user`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(EditOneUser),
        credentials: 'include',
      });
      if (response.ok) {
        dispatch(editOneUserFront(EditOneUser));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };