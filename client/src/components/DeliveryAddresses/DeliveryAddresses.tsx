import React, { useEffect, useState } from 'react';
import OneAddressCard from './OneAddressCard/OneAddressCard';
import styleDeliveryAddress from './DeliveryAddresses.module.css';
import { getDeliveryAddress } from '../../redux/Thunk/DeliveryAddress/getDeliveryAddress';
import { RootState } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { fetchGetAddresses } from '../../redux/Thunk/DeliveryAddress/deliveryAddress.api';

export default function DeliveryAddresses() {
  const dispatch = useAppDispatch();
  const addresses = useAppSelector(
    (state: RootState) => state.DeliveryAddressReducer.addresses
  );
  console.log(
    '🚀🚀 ~ file: DeliveryAddresses.tsx:14 ~ DeliveryAddresses ~ addresses~',
    addresses
  );
  const userId = 2;

  useEffect(() => {
    dispatch(getDeliveryAddress(userId));
  }, [dispatch]);

  //   useEffect(() => {
  //     dispatch(fetchGetAddresses(userId));
  //   }, []);

  return (
    <div className={styleDeliveryAddress.conteiner}>
      <OneAddressCard />
      <OneAddressCard />
      <OneAddressCard />
      <OneAddressCard />
    </div>
  );
}
