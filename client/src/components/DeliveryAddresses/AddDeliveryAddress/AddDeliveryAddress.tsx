import React, { useState } from 'react';
import { INewDeliveryAddress } from '../../../types/DeliveryAddress';
import styleAddAdressForm from './AddDeliveryAddress.module.css';
import arrowRight from '../../../img/icons/arrowRight.svg';
import closeSymbol from '../../../img/icons/closeSymbol.svg';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { fetchAddDeliveryAddress } from '../../../redux/Thunk/DeliveryAddress/addDeliveryAddres.api';
import { getDeliveryAddress } from '../../../redux/Thunk/DeliveryAddress/getDeliveryAddress';
import { addNewAdressBtnToggle } from '../../../redux/slices/DeliveryAddress/addAddressButton.slice';

export default function AddDeliveryAddress({
  userId,
  isCancel,
}: {
  userId: number;
  isCancel: boolean;
}) {
  const dispatch = useAppDispatch();
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
    dispatch(fetchAddDeliveryAddress(newTask));
    dispatch(getDeliveryAddress(userId));
    setInputNewAddress('');
    if (isCancel) {
      dispatch(addNewAdressBtnToggle());
    }
  };

  return (
    <div className={styleAddAdressForm.addressForm}>
      <form onSubmit={addNewDeliveryAddress}>
        <div>
          <label className={styleAddAdressForm.labelText} htmlFor="address">
            Адрес доставки
          </label>
          <div className={styleAddAdressForm.blockConteiner}>
            <input
              className={styleAddAdressForm.inputAddress}
              id="address"
              onChange={inputNewAddressHandler}
              name="address"
              type="text"
              placeholder="Укажите адрес по которому Вам удобно получить товар..."
              value={inputNewAddress}
              required
            />
            <button className={styleAddAdressForm.inputBtn} type="submit">
              Добавить
              <img src={arrowRight} alt="arrowRight" />
            </button>
            {isCancel && (
              <button
                onClick={() => dispatch(addNewAdressBtnToggle())}
                className={styleAddAdressForm.cancelBtn}
              >
                Отменить
                <img src={closeSymbol} alt="closeSymbol" />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
