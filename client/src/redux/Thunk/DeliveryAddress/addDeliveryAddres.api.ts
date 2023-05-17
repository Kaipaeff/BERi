import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { INewDeliveryAddress } from '../../../types/DeliveryAddress';
import { addDeliveryAddressFront } from '../../slices/DeliveryAddress/deliveryAddress.slice';

// TODO: Функция для добавления адреса
export const fetchAddDeliveryAddress =
  (
    NewAddress: INewDeliveryAddress
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch('/account/address/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(NewAddress),
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(addDeliveryAddressFront(data));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
