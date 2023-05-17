import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { INewDeliveryAddress } from '../../../types/DeliveryAddress';

// TODO: Функция для изменения адреса
export const fetcEditDeliveryAddress =
  (
    EditAddress: INewDeliveryAddress
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch('/account/address/', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(EditAddress),
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        console.log(
          '🚀🚀 ~ file: editOneDeliveryAddress.api.ts:23 ~ data~',
          data
        );
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
