import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { INewVendor } from '../../../types/VendorTypes';
import { addVendorFront } from '../../slices/Vendor/vendor.slise';

// TODO: Функция для добавления поставщика
export const fetchAddNewVendor =
  (NewVendor: INewVendor): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch('/vendor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(NewVendor),
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();

        dispatch(addVendorFront(data[0]));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
