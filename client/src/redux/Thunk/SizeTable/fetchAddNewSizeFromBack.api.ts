import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { INewSize } from '../../../types/Size.types';
import { addSizeFront } from '../../slices/SizeTable/sizetable.slice';

// TODO: Функция для добавления размера
export const fetchAddNewSizeFromBack =
  (NewSize: INewSize): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch('/sizes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(NewSize),
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();

        dispatch(addSizeFront(data[0]));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
