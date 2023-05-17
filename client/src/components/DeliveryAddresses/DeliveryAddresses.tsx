import React, { useEffect, useState } from 'react';
import OneAddressCard from './OneAddressCard/OneAddressCard';
import styleDeliveryAddress from './DeliveryAddresses.module.css';
import { getDeliveryAddress } from '../../redux/Thunk/DeliveryAddress/getDeliveryAddress';
import { RootState } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { fetchGetAddresses } from '../../redux/Thunk/DeliveryAddress/deliveryAddress.api';
import AddDeliveryAddress from './AddDeliveryAddress/AddDeliveryAddress';

export default function DeliveryAddresses() {
  const dispatch = useAppDispatch();
  const addresses = useAppSelector(
    (state: RootState) => state.DeliveryAddressReducer.addresses
  );
  console.log(
    '🚀🚀 ~ file: DeliveryAddresses.tsx:14 ~ DeliveryAddresses ~ addresses~',
    addresses
  );
  const userId = 4;

  useEffect(() => {
    dispatch(getDeliveryAddress(userId));
  }, [dispatch]);

  return (
    <div className={styleDeliveryAddress.conteiner}>
      {!addresses.length && (
        <>
          <p>Адрес доставки не указан...</p>
          <AddDeliveryAddress userId={userId} />
        </>
      )}
      {addresses.length ? <OneAddressCard /> : null}
    </div>
  );
}
