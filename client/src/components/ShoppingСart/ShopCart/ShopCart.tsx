import React, { useCallback, useEffect, useState } from 'react';
import styles from './ShopCart.module.css';
import shoesImage from './img/shoesForTest.jpg';
import trashIcon from './img/trash.jpg';
import truckIcon from './img/truck.jpg';
import { productType } from '../../../types/product';
import { Link } from 'react-router-dom';

export default function ShopCart() {
  // парсинг товаров из localStorage
  const [goods, setGoods] = useState([]);
  const goodsForShopCart = localStorage.getItem('GoodsForShopCart');

  useEffect(() => {
    if (goodsForShopCart) {
      setGoods(JSON.parse(goodsForShopCart));
    }
  }, []);

  // счетчик
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

  const [plusDilevery, setPlusDilevery] = useState(Boolean);

  const RadioBoolean = (checked: any) => {
    setRadioClassName(checked);
    setRadioClassName2(!checked);
    setPlusDilevery(false);
  };

  const RadioBoolean2 = (checked: any) => {
    setRadioClassName(!checked);
    setRadioClassName2(checked);
    setPlusDilevery(true);
    console.log(plusDilevery, '<<<<plusdeleverT');
  };

  // промокод
  const initPromoCode: any = {
    promoCode: '',
  };

  const [promoCode, setPromoCode] = useState(initPromoCode);

  const changePromoCodeHandler = (e: any) => {
    setPromoCode((pre: any) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  // удаление
  const deleteHandle = (element: any) => {
    const newGoods = goods.filter((el: any) => el.id !== element);
    localStorage.setItem('GoodsForShopCart', JSON.stringify(newGoods));
    setGoods(newGoods);

    // вызов функции handleTotalPrice для обновления totalPriceCalculate
    setTotalPriceCalculate((prev) => {
      const newPrice = { ...prev };
      delete newPrice[element];
      return newPrice;
    });
  };
  // калькулятор итоговой суммы

  const [totalPriceCalculate, setTotalPriceCalculate] = useState<{
    [key: number]: number;
  }>({});

  const handleTotalPrice = useCallback(
    (quantity: number, elId: number, minPrice: number) => {
      const calculateTotalPrice = quantity * minPrice;

      if (totalPriceCalculate[elId] !== calculateTotalPrice) {
        setTotalPriceCalculate({
          ...totalPriceCalculate,
          [elId]: calculateTotalPrice,
        });
      }

      return calculateTotalPrice;
    },
    [totalPriceCalculate]
  );

  const totalPrice = () => {
    const valuesArray = Object.values(totalPriceCalculate);

    const totalPrice = valuesArray.reduce(
      (total, currentValue) => total + currentValue,
      0
    );
    // сумму доставки брать из бека? сейчас это 100
    return plusDilevery ? totalPrice + 100 : totalPrice;
  };
  console.log(goods, '<<<<<godds');
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
        {goods.length ? (
          goods.map((el: any, i) => (
            <div className={styles.InfoGoods} key={i}>
              <div className={styles.Product}>
                <h5>Товар</h5>
                <div className={styles.ProductChildElement}>
                  <div>
                    <img
                      src={el.img}
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
                  <span>{el.minPrice}р</span>
                </div>
              </div>
              <div className={styles.Subtotal}>
                <h5>Сумма</h5>
                <div className={styles.PriceCounter}>
                  <b>{handleTotalPrice(el.quantity, el.id, el.minPrice)}р</b>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>В вашей корзине пока что нет товаров</div>
        )}
      </div>
      <div className={styles.InfoOrder}>
        <div className={styles.LeftSide_Promocod}>
          <h3>У Вас есть промокод?</h3>
          <h6>Добавьте свой промокод здесь, и получите персональную скидку</h6>
          <form>
            <input
              className={styles.PromoInput}
              onChange={changePromoCodeHandler}
              // нужно ограничить длинну инпута
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
                    {/* сумму доставки доставать из бека */}

                    <b>{totalPrice()}р</b>
                  </span>
                </div>
                <Link to="payment">
                  <button type="submit" className={styles.Btn_Order}>
                    Оплатить
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
