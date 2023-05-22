import React from 'react';
import styles from '../ShopCart/ShopCart.module.css';

export default function DileveryPay({ totalPriceCalculate, totalPrice }: any) {
  console.log(totalPrice(), '<<<<TOTAL PRICE');

  return (
    <div className={styles.InfoOrder}>
      <div className={styles.deliveryAdress}>
        <span>Выбрать адрес доставки</span>
        <input
          type="selector"
          className={styles.inputDeliveryAdress}
          placeholder="'Адрес доставки тянется из ЛК'"
        />
      </div>
      <div className={styles.LeftSide_Promocod}></div>

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
