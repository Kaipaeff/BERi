import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { deleteOneUserFront } from '../../slices/User/user.slice';
import IOneUser from '../../../types/UserTypes';

// TODO: Функция для удаления usera
export const fetchDeleteUserFromBack =
  (
    oneUser: IOneUser
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/user/${oneUser.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        dispatch(deleteOneUserFront(oneUser))
      }
    } catch (error) {
      console.error('Ошибка удаления записи из базы данных!', error);
    }
  };