import React, { useCallback, useEffect, useState } from 'react';
import styles from './ShopCart.module.css';
import truckIcon from './img/truck.jpg';
import { productType } from '../../../types/product';
import CartProduct from '../CartProduct';
import DileveryPay from '../DileveryPay/DileveryPay';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { addGoodsReducer } from '../../../redux/slices/shopCard/card.slice';
import { Progress } from 'antd';
import { RootState } from '../../../types/types';

export default function ShopCart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // парсинг товаров из localStorage
  const dispatch = useAppDispatch();
  const [goods, setGoods] = useState([]);
  const goodsForShopCart = localStorage.getItem('GoodsForShopCart');
  const [totalPriceCalculate, setTotalPriceCalculate] = useState<{
    [key: number]: number;
  }>({});

  useEffect(() => {
    if (goodsForShopCart) {
      setGoods(JSON.parse(goodsForShopCart));
    }
  }, [goodsForShopCart]);

  // счетчик
  function Increment(id: number) {
    const goodsIncrementQuantity: any = goods.map((el: productType) =>
      el.id === id ? { ...el, quantity: ((el.quantity as number) += 1) } : el
    );
    localStorage.setItem(
      'GoodsForShopCart',
      JSON.stringify(goodsIncrementQuantity)
    );
    dispatch(addGoodsReducer(goodsIncrementQuantity));
    setGoods(goodsIncrementQuantity);
  }

  function Dicrement(id: number) {
    const goodsDicrementQuantity: any = goods.map((el: productType) =>
      el.id === id ? { ...el, quantity: ((el.quantity as number) -= 1) } : el
    );
    localStorage.setItem(
      'GoodsForShopCart',
      JSON.stringify(goodsDicrementQuantity)
    );
    dispatch(addGoodsReducer(goodsDicrementQuantity));
    setGoods(goodsDicrementQuantity);
  }

  // удаление
  const deleteHandle = (element: any) => {
    const deleteProduct = goods.filter((el: any) => el.id !== element);

    localStorage.setItem('GoodsForShopCart', JSON.stringify(deleteProduct));
    dispatch(addGoodsReducer(deleteProduct));
    setGoods(deleteProduct);

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

  const totalPrice = () => {
    const valuesArray = Object.values(totalPriceCalculate);

    const totalPrice: any = valuesArray.reduce(
      (total: any, currentValue) => total + currentValue,
      0
    );
    // сумму доставки брать из бека? сейчас это 100
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
          <div className={styles.DileveryLiner}>
            {' '}
            <Progress
              percent={Math.ceil((totalPrice() / 10000) * 100)}
              showInfo={true}
            />
          </div>

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

      <DileveryPay
        totalPriceCalculate={totalPriceCalculate}
        totalPrice={totalPrice}
      />
    </div>
  );
}
