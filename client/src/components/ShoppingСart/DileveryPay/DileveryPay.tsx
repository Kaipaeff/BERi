import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import styles from '../ShopCart/ShopCart.module.css';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { RootState } from '../../../types/types';

import { getDeliveryAddress } from '../../../redux/Thunk/DeliveryAddress/getDeliveryAddress';
import { Context } from '../../../index';
import { ordering } from '../../../redux/Thunk/Ordering/ordering';
import { fetchAddDeliveryAddress } from '../../../redux/Thunk/DeliveryAddress/addDeliveryAddres.api';
import { INewDeliveryAddress } from '../../../types/DeliveryAddress';

export default function DileveryPay({ totalPriceCalculate, totalPrice }: any) {
  const dispatch = useAppDispatch();
  const [newAdress, setNewAdress] = useState<any>('');
  const [pointAdress, setPointAdress] = useState<string>('');
  const [clientNumber, setClientNumber] = useState<string>('');

  const { storeContext } = useContext(Context);
  const userId = storeContext.user.id;

  const goodsForShopCart = JSON.parse(
    localStorage.getItem('GoodsForShopCart') as string
  );
  console.log(goodsForShopCart, '<<<<<<goodsForShopCart');

  const addresses = useAppSelector(
    (state: RootState) => state.DeliveryAddressReducer.addresses
  );

  useEffect(() => {
    const userId: number = storeContext.user.id;
    console.log(userId, '<<<<userId');
    if (userId) {
      dispatch(getDeliveryAddress(userId));
    }
  }, [storeContext.user.id]);

  const addNewAdress = (event: ChangeEvent<HTMLInputElement>) => {
    setNewAdress(event.target.value);
  };
  console.log(newAdress, '<<<newAdress');
  const addClientNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setClientNumber(event.target.value);
  };

  console.log(clientNumber, '<<<clientNumber');

  const handlePointAdress = (event: any) => {
    setPointAdress(event);
  };

  const handleOrdering = (event: any) => {
    event.preventDefault();
    const order = {
      phone: clientNumber,
      adress: newAdress,
      goods: goodsForShopCart,
    };
    const newTask: INewDeliveryAddress = {
      address: newAdress,
      userId,
    };

    dispatch(fetchAddDeliveryAddress(newTask));
    ordering(order);
    console.log(order, '<<<<<<<<<order');
  };

  // console.log(infoOrder, '<<<<<infoOrder')

  return (
    <div className={styles.InfoOrder}>
      <div>
        <div className={styles.deliveryAdress}>
          {/* <Link to="/map"> */}
          <h3>Выберите адрес из списка:</h3>
          <div className={styles.adress}>
            {addresses.length ? (
              addresses.map((address: any, i: number) => (
                <p
                  className={styles.adressPointer}
                  onClick={(event: any) =>
                    handlePointAdress(event.target.textContent)
                  }
                  key={i}
                >
                  {address.address}
                </p>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <span>Или введите новый</span>
        <input
          type="text"
          name="newAdress"
          value={newAdress || pointAdress}
          className={styles.inputDeliveryAdress}
          onChange={addNewAdress}
          placeholder="'Адрес доставки тянется из ЛК'"
        />
        {/* надо поправить, не работает валидация номера */}
        <input
          type="number"
          name="clientNumber"
          value={clientNumber}
          pattern="^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$"
          required
          className={styles.inputDeliveryAdress}
          onChange={addClientNumber}
          placeholder="Введите номер телефона в формате +7 (999) 999-99-99"
        />
        {/* <button>Выбрать адрес доставки из личного кабинета</button> */}
        {/* или добавьте его в личном кабинете /account */}
        {/* </Link> */}
      </div>

      <div className={styles.RightSide_DeliveryChoice}>
        <div>
          <form>
            <div className={styles.OrderContainer}>
              <div className={styles.DeliveryPrice}>
                <h3>Итого к оплате</h3>
                <span>
                  {/* сумму доставки доставать из бека */}

                  <b>{totalPrice()}р</b>
                </span>
              </div>

              <button
                onClick={(event) => handleOrdering(event)}
                // onClick={() => (window.location.href = '/payment')}
                type="submit"
                className={styles.Btn_Order}
              >
                Заказать
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
