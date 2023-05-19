import React, { useCallback, useEffect, useState } from 'react';
import styles from './ShopCart.module.css';
import truckIcon from './img/truck.jpg';
import { productType } from '../../../types/product';
import CartProduct from '../CartProduct';
import DileveryPay from '../DileveryPay/DileveryPay';

export default function ShopCart() {
  // парсинг товаров из localStorage
  const [goods, setGoods] = useState([]);
  const goodsForShopCart = localStorage.getItem('GoodsForShopCart');
  const [totalPriceCalculate, setTotalPriceCalculate] = useState<{
    [key: number]: number;
  }>({});

  useEffect(() => {
    if (goodsForShopCart) {
      setGoods(JSON.parse(goodsForShopCart));
    }
    console.log(goodsForShopCart, 'goodsForShopCart');
  }, []);

  // счетчик
  function Increment(id: number) {
    const goodsIncrementQuantity: any = goods.map((el: productType) =>
      el.id === id ? { ...el, quantity: ((el.quantity as number) += 1) } : el
    );
    localStorage.setItem(
      'GoodsForShopCart',
      JSON.stringify(goodsIncrementQuantity)
    );
    setGoods(goodsIncrementQuantity);
  }

  function Dicrement(id: number) {
    const goodsIncrementQuantity: any = goods.map((el: productType) =>
      el.id === id ? { ...el, quantity: ((el.quantity as number) -= 1) } : el
    );
    localStorage.setItem(
      'GoodsForShopCart',
      JSON.stringify(goodsIncrementQuantity)
    );
    setGoods(goodsIncrementQuantity);
  }

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
            <CartProduct
              key={el.id}
              product={el}
              Increment={() => Increment(el.id)}
              Dicrement={() => Dicrement(el.id)}
              handleTotalPrice={handleTotalPrice(
                el.quantity,
                el.id,
                el.minPrice
              )}
              deleteHandle={() => deleteHandle(el.id)}
            />
          ))
        ) : (
          <div>Ваша корзина пока что пустая</div>
        )}
      </div>

      <DileveryPay totalPriceCalculate={totalPriceCalculate} />
    </div>
  );
}
