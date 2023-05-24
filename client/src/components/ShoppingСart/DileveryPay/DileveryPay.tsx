import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import styles from '../ShopCart/ShopCart.module.css';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { RootState } from '../../../types/types';

import { getDeliveryAddress } from '../../../redux/Thunk/DeliveryAddress/getDeliveryAddress';
import { Context } from '../../../index';

export default function DileveryPay({ totalPriceCalculate, totalPrice }: any) {
  console.log(totalPrice(), '<<<<TOTAL PRICE');
  const dispatch = useAppDispatch();
  const [newAdress, setNewAdress] = useState<any>('');

  const { storeContext } = useContext(Context);

  const addresses = useAppSelector(
    (state: RootState) => state.DeliveryAddressReducer.addresses
  );
  console.log(addresses, '<<<addresses');
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

  console.log(newAdress);
  console.log(addresses, '<<<<<addresses');
  return (
    <div className={styles.InfoOrder}>
      <div>
        <div className={styles.deliveryAdress}>
          {/* <Link to="/map"> */}
          <h3>Выберите адрес:</h3>
          <div className={styles.adress}>
            {addresses.length ? (
              addresses.map((address: any, i: number) => (
                <p key={i}> {address.address}</p>
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
          value={newAdress}
          className={styles.inputDeliveryAdress}
          onChange={addNewAdress}
          placeholder="'Адрес доставки тянется из ЛК'"
        />
        <button>Выбрать адрес доставки из личного кабинета</button>
        {/* или добавьте его в личном кабинете /account */}
        {/* </Link> */}
      </div>

      <div className={styles.RightSide_DeliveryChoice}>
        <div>
          <form>
            <div>
              <div className={styles.DeliveryPrice}>
                <h3>Итого к оплате</h3>
                <span>
                  {/* сумму доставки доставать из бека */}

                  <b>{totalPrice()}р</b>
                </span>
              </div>

              <button
                onClick={() => (window.location.href = '/payment')}
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
