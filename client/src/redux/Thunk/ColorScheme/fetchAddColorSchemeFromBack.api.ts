import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { INewColorElement } from '../../../types/ColorTable.types';
import { addColorSchemeFront } from '../../slices/ColorSheme/colorScheme.slice';

// TODO: Функция для добавления поставщика
export const fetchAddColorSchemeFromBack =
  (NewColor: INewColorElement): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch('/colorschemes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(NewColor),
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();

        dispatch(addColorSchemeFront(data[0]));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };