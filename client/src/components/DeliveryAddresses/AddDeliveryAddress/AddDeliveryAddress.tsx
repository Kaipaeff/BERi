import React, { useState } from 'react';
import { INewDeliveryAddress } from '../../../types/DeliveryAddress';

export default function AddDeliveryAddress({ userId }: { userId: number }) {
  const [inputNewAddress, setInputNewAddress] = useState('');

  const inputNewAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNewAddress(e.target.value);
  };

  const addNewDeliveryAddress = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTask: INewDeliveryAddress = {
      address: inputNewAddress,
      userId,
    };
    console.log(
      '🚀🚀 ~ file: AddDeliveryAddress.tsx:17 ~ addNewDeliveryAddress ~ newTask~',
      newTask
    );
  };

  return (
    <div className="addressForm">
      <form onSubmit={addNewDeliveryAddress}>
        <label htmlFor="address">Адрес доставки</label>
        <div>
          <input
            id="address"
            onChange={inputNewAddressHandler}
            name="address"
            type="text"
            placeholder="Укажите адрес доставки..."
            value={inputNewAddress}
            required
          />
          <button type="submit">Добавить</button>
        </div>
      </form>
    </div>
  );
}
