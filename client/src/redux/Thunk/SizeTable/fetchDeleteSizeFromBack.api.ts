import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import IOneSize from '../../../types/Size.types';
import { deleteOneSizeFront } from '../../slices/SizeTable/sizetable.slice';

// TODO: Функция для удаления размера
export const fetchDeleteSizeFromBack =
  (OneSize: IOneSize): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/sizes/${OneSize.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        dispatch(deleteOneSizeFront(OneSize));
      }
    } catch (error) {
      console.error('Ошибка удаления записи из базы данных!', error);
    }
  };
