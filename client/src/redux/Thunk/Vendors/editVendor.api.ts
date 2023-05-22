import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import IOneVendor from '../../../types/VendorTypes';
import { editOneVendorFront } from '../../slices/Vendor/vendor.slise';

// TODO: Функция для изменения адреса
export const fetchEditVendor =
  (
    EditVendor: IOneVendor
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/vendor`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(EditVendor),
        credentials: 'include',
      });
      if (response.ok) {
        dispatch(editOneVendorFront(EditVendor));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };