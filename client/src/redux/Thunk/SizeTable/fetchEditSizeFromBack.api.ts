import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import IOneSize from '../../../types/Size.types';
import { editOneSizeFront } from '../../slices/SizeTable/sizetable.slice';

// TODO: Функция для изменения адреса
export const fetchEditSizeFromBack =
  (EditSize: IOneSize): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/sizes`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(EditSize),
        credentials: 'include',
      });
      if (response.ok) {
        dispatch(editOneSizeFront(EditSize));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
