import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { deleteOneColorSchemeFront } from '../../slices/ColorSheme/colorScheme.slice';
import IOneColorElement from '../../../types/ColorTable.types';

// TODO: Функция для удаления цвета
export const fetchDeleteColorSchemeFromBack =
  (
    OneColorScheme: IOneColorElement
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/colorschemes/${OneColorScheme.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        dispatch(deleteOneColorSchemeFront(OneColorScheme));
      }
    } catch (error) {
      console.error('Ошибка удаления записи из базы данных!', error);
    }
  };