import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import IDeliveryAddress from '../../../types/DeliveryAddress';
import { editOneDeliveryAddressFront } from '../../slices/DeliveryAddress/deliveryAddress.slice';

// TODO: Функция для изменения адреса
export const fetchEditOneDeliveryAddress =
  (
    EditAddress: IDeliveryAddress
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
        dispatch(editOneDeliveryAddressFront(EditAddress));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
