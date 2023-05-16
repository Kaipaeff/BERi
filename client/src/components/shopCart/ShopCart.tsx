import React, { useEffect, useMemo, useState } from 'react';
import styles from './ShopCart.module.css';
import shoesImage from './img/shoesForTest.jpg';
import trashIcon from './img/trash.jpg';
import truckIcon from './img/truck.jpg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getAllProductInfo } from '../../redux/slices/Product/ProductInfo.selector';

export default function ShopCart() {
  const dispatch = useAppDispatch();

  const productInfoContainer = useAppSelector(getAllProductInfo);
  console.log(productInfoContainer, '<<<<<<productInfoContainer');
  interface ICounter {
    counter: number;
  }

  // количество приходит с локал стореж
  const initState: ICounter = {
    counter: 1,
  };

  const [counter, setCounter] = useState<any>(initState);

  interface IPrice {
    price: number;
  }

  const initStatePrice: IPrice = useMemo(
    () => ({
      //сюда прийдет цена из БД
      price: 80,
    }),
    []
  );

  const [price, setPrice] = useState<any>(initStatePrice);

  function Increment() {
    setCounter((prev: any) => {
      return { counter: prev.counter + 1 };
    });
    setPrice((prev: any) => {
      return { price: prev.price + initStatePrice.price };
    });
  }

  function Dicrement() {
    setCounter((prev: any) => {
      if (prev.counter > 0) {
        return { counter: prev.counter - 1 };
      } else {
        return { counter: 0 };
      }
    });

    if (counter.counter !== 0) {
      setPrice((prev: any) => {
        if (prev.price >= initStatePrice.price) {
          return { price: prev.price - initStatePrice.price };
        }
      });
    }
  }
  const test = () => {
    console.log('test btn remove');
  };

  // бардер на радио кнопках
  const [radioClassName, setRadioClassName] = useState(false);
  const [radioClassName2, setRadioClassName2] = useState(false);

  const RadioBoolean = (checked: any) => {
    setRadioClassName(checked);
    setRadioClassName2(!checked);
  };
  // тест
  // localStorage.setItem('test', 'asd');

  const RadioBoolean2 = (checked: any) => {
    setRadioClassName(!checked);
    setRadioClassName2(checked);
  };

  const initPromoCode: any = {
    promoCode: '',
  };

  const [promoCode, setPromoCode] = useState(initPromoCode);

  const changePromoCodeHandler = (e: any) => {
    setPromoCode((pre: any) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  console.log(promoCode, '<<<promocode');

  return (
    <div className={styles.Main}>
      <div className={styles.Head}>
        <h1>Корзина</h1>
        <h4>
          Закажите на сумму от 10 000 и получите <b>Бесплатную доставку</b>
        </h4>
        <div className={styles.DileveryLine}>
          {/* зеленая полоска должна заполняться по мере накопленной суммы до бесплатной доставки */}
          <div className={styles.DileveryLiner}></div>
          <img src={truckIcon} alt="truckIcon" />
        </div>
      </div>
      <div className={styles.Content}>
        {/* тут будет map */}
        <div className={styles.InfoGoods}>
          <div className={styles.Product}>
            <h5>Товар</h5>
            <div className={styles.ProductChildElement}>
              <div>
                <img
                  src={shoesImage}
                  alt="product"
                  className={styles.Img_Product}
                />
              </div>
              <div className={styles.ProductInfo}>
                <span>AirBrags@ Sneackers</span>
                <span>Size: 2XL, Color: Green</span>
                <div className={styles.TrashContainer}>
                  <img
                    src={trashIcon}
                    alt="trashImg"
                    className={styles.Icon_Trash}
                    onClick={test}
                  />
                  <button onClick={test} className={styles.Btn_Remove}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Quantity}>
            <h5>Количество</h5>
            <div className={styles.Counter}>
              <div className={styles.CounterBorder}>
                <button onClick={Dicrement} className={styles.Dicrement}>
                  -
                </button>
                <span className={styles.Count}>{counter.counter}</span>
                <button onClick={Increment} className={styles.Increment}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className={styles.Price}>
            <h5>Стоимость</h5>
            <div className={styles.PriceCounter}>
              <span>{initStatePrice.price}$</span>
            </div>
          </div>
          <div className={styles.Subtotal}>
            <h5>Сумма</h5>
            <div className={styles.PriceCounter}>
              <b>{price.price}$</b>
            </div>
          </div>
        </div>
        <div className={styles.InfoGoods}>
          <div className={styles.Product}>
            <h5>Product</h5>
            <div className={styles.ProductChildElement}>
              <div>
                <img
                  src={shoesImage}
                  alt="product"
                  className={styles.Img_Product}
                />
              </div>
              <div className={styles.ProductInfo}>
                <span>AirBrags@ Sneackers</span>
                <span>Size: 2XL, Color: Green</span>
                <div className={styles.TrashContainer}>
                  <img
                    src={trashIcon}
                    alt="trashImg"
                    className={styles.Icon_Trash}
                  />
                  <button onClick={test} className={styles.Btn_Remove}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Quantity}>
            <h5>Количество</h5>
            <div className={styles.Counter}>
              <div className={styles.CounterBorder}>
                <button onClick={Dicrement} className={styles.Dicrement}>
                  -
                </button>
                <span className={styles.Count}>{counter.counter}</span>
                <button onClick={Increment} className={styles.Increment}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className={styles.Price}>
            <h5>Стоимость</h5>
            <div className={styles.PriceCounter}>
              <span>{initStatePrice.price}$</span>
            </div>
          </div>
          <div className={styles.Subtotal}>
            <h5>Сумма</h5>
            <div className={styles.PriceCounter}>
              <b>{price.price}$</b>
            </div>
          </div>
        </div>
        {/* тут map заканчивается */}
      </div>
      <div className={styles.InfoOrder}>
        <div className={styles.LeftSide_Promocod}>
          <h3>У Вас есть промокод?</h3>
          <h6>Добавьте свой промокод здесь, и получите персональную скидку</h6>
          <form>
            <input
              className={styles.PromoInput}
              onChange={changePromoCodeHandler}
              value={promoCode.promoCode}
              name="promoCode"
              type="text"
              placeholder="Ваш промокод"
            />
            <button className={styles.BtnPromoInput}>Применить</button>
          </form>
        </div>
        <div className={styles.RightSide_DeliveryChoice}>
          <h2>Стоимость доставки</h2>
          <div>
            <form>
              <div>
                <div
                  className={
                    radioClassName
                      ? `${styles.DeliveryPrice} ${styles.Test1}`
                      : styles.DeliveryPrice
                  }
                >
                  <div className={styles.ShippingContainer}>
                    <input
                      className={styles.RadioPrice}
                      onChange={(e) => RadioBoolean(e.target)}
                      type="radio"
                      name="delivery"
                      value="free-shipping"
                    />
                    <span className={styles.SpanPrice}>Самовывоз</span>
                  </div>
                  <span>Бесплатно</span>
                </div>
                <div
                  className={
                    radioClassName2
                      ? `${styles.DeliveryPrice} ${styles.Test1}`
                      : styles.DeliveryPrice
                  }
                >
                  <div className={styles.ShippingContainer}>
                    <input
                      className={styles.RadioPrice}
                      onChange={(e) => RadioBoolean2(e.target)}
                      type="radio"
                      name="delivery"
                      value="express-shipping"
                    />
                    <span className={styles.SpanPrice}>Экспресс доставка</span>
                  </div>
                  <span>100$</span>
                </div>
                <div className={styles.DeliveryPrice}>
                  <h4>Стоимость доставки</h4>
                  <span>
                    <b>$160</b>
                  </span>
                </div>
                <div className={styles.DeliveryPrice}>
                  <h3>Итого к оплате</h3>
                  <span>
                    <b>$160</b>
                  </span>
                </div>
                <button type="submit" className={styles.Btn_Order}>
                  Оплатить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
