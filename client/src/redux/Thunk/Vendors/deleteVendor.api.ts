import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { deleteOneVendorFront } from '../../slices/Vendor/vendor.slise';
import IOneVendor from '../../../types/VendorTypes';

// TODO: Функция для удаления vendora
export const fetchDeleteVendorFromBack =
  (
    oneVendor: IOneVendor
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/vendor/${oneVendor.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        dispatch(deleteOneVendorFront(oneVendor))
      }
    } catch (error) {
      console.error('Ошибка удаления записи из базы данных!', error);
    }
  };