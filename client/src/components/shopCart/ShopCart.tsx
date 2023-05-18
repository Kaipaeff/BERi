import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './ShopCart.module.css';
import shoesImage from './img/shoesForTest.jpg';
import trashIcon from './img/trash.jpg';
import truckIcon from './img/truck.jpg';
import { productType } from '../../types/product';

export default function ShopCart() {
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
  //надо поправить, считает только при выборе доставки
  const [totalPrice, setTotalPrice] = useState(initStatePrice.price);

  const [goods, setGoods] = useState([]);
  const goodsForShopCart = localStorage.getItem('GoodsForShopCart');

  useEffect(() => {
    console.log('useEffect');
    if (goodsForShopCart) {
      setGoods(JSON.parse(goodsForShopCart));
    }
  }, []);

  function Increment(id: number) {
    const goodsIncrementQuantity: any = goods.map((el: productType) =>
      el.id === id ? { ...el, quantity: ((el.quantity as number) += 1) } : el
    );
    localStorage.setItem('GoodsForShopCart', JSON.stringify(goods));
    setGoods(goodsIncrementQuantity);
  }

  function Dicrement(id: number) {
    const goodsIncrementQuantity: any = goods.map((el: productType) =>
      el.id === id ? { ...el, quantity: ((el.quantity as number) -= 1) } : el
    );
    localStorage.setItem('GoodsForShopCart', JSON.stringify(goods));
    setGoods(goodsIncrementQuantity);
  }

  // бардер на радио кнопках
  const [radioClassName, setRadioClassName] = useState(false);
  const [radioClassName2, setRadioClassName2] = useState(false);

  const RadioBoolean = (checked: any) => {
    setRadioClassName(checked);
    setRadioClassName2(!checked);
  };

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

  const deleteHandle = (element: any) => {
    const newGoods = goods.filter((el: any) => el.id !== element);
    localStorage.setItem('GoodsForShopCart', JSON.stringify(newGoods));
    setGoods(newGoods);
  };

  const calculatePriceHandle = (dilevery: number) => {
    console.log(price.price, '<<<PRICE');
    setTotalPrice(price.price + dilevery);
  };

  const [totalPriceCalculate, setTotalPriceCalculate] = useState<{
    [key: number]: number;
  }>({});

  const handleTotalPrice = useCallback(
    (quantity: number, elId: number) => {
      const calculateTotalPrice = quantity * price.price;

      if (totalPriceCalculate[elId] !== calculateTotalPrice) {
        setTotalPriceCalculate({
          ...totalPriceCalculate,
          [elId]: calculateTotalPrice,
        });
      }

      return calculateTotalPrice;
    },
    [price.price, totalPriceCalculate]
  );

  const moreHanbleCalculate = () => {
    const valuesArray = Object.values(totalPriceCalculate);

    const totalPrice = valuesArray.reduce(
      (total, currentValue) => total + currentValue,
      0
    );
    return totalPrice;
  };

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
        {goods.map((el: any, i) => (
          <div className={styles.InfoGoods} key={i}>
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
                  <span>
                    {el.name} &nbsp;&nbsp;
                    {el.Vendor.name}
                  </span>
                  <span>{el.description}</span>
                  <div className={styles.TrashContainer}>
                    <img
                      src={trashIcon}
                      alt="trashImg"
                      className={styles.Icon_Trash}
                      onClick={() => deleteHandle(el.id)}
                    />
                    <button
                      onClick={() => deleteHandle(el.id)}
                      className={styles.Btn_Remove}
                    >
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
                  <button
                    onClick={() => el.quantity > 1 && Dicrement(el.id)}
                    className={styles.Dicrement}
                  >
                    -
                  </button>
                  <span className={styles.Count}>{el.quantity}</span>
                  <button
                    onClick={() => Increment(el.id)}
                    className={styles.Increment}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.Price}>
              <h5>Стоимость</h5>
              <div className={styles.PriceCounter}>
                {/* нужно вытащить из базы стоимость */}
                <span>{initStatePrice.price}р</span>
              </div>
            </div>
            <div className={styles.Subtotal}>
              <h5>Сумма</h5>
              <div className={styles.PriceCounter}>
                {/* <b>{handleTotalPrice(el.quantity, el.id)}р</b> */}
                <b>{handleTotalPrice(el.quantity, el.id)}р</b>
              </div>
            </div>
          </div>
        ))}
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
                      onChange={(e) => {
                        calculatePriceHandle(0);
                        RadioBoolean(e.target);
                      }}
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
                      onChange={(e) => {
                        // стоимость доставки доставать с бека
                        calculatePriceHandle(100);
                        RadioBoolean2(e.target);
                      }}
                      type="radio"
                      name="delivery"
                      value="express-shipping"
                    />
                    <span className={styles.SpanPrice}>Экспресс доставка</span>
                  </div>
                  <span>100р</span>
                </div>
                <div className={styles.DeliveryPrice}>
                  <h3>Итого к оплате</h3>
                  <span>
                    <b>{moreHanbleCalculate()}р</b>
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
