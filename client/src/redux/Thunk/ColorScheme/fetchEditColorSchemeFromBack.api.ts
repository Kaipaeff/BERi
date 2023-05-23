import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import IOneColorElement from '../../../types/ColorTable.types';
import { editOneColorSchemeFront } from '../../slices/ColorSheme/colorScheme.slice';

// TODO: Функция для изменения цвета
export const fetchEditColorSchemeFromBack =
  (
    EditColorScheme: IOneColorElement
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch('/colorschemes', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(EditColorScheme),
        credentials: 'include',
      });
      if (response.ok) {
        dispatch(editOneColorSchemeFront(EditColorScheme));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
